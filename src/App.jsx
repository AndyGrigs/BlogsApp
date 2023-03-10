
import React from 'react'
import './App.css'
import cl from './Comp/button/myButton.module.css'
import PostList from "./Comp/PostList.jsx"
import PostForm from "./Comp/PostForm.jsx"
import PostFilter from './Comp/PostFilter.jsx'
import MyModal from './Comp/modal/MyModal'
import MyButton from './Comp/button/MyButton'
import { usePosts } from './Comp/hooks/usePosts'
import PostService from './Comp/API/PostService'
import Loader from './Comp/loader/Loader'
import {useFetching} from  './Comp/hooks/useFetching'
import {getPagesCount} from './Comp/utils/pages'



export default function App() {
  const [posts, setPosts] = React.useState([])
  const [totalPages, setTotalPages] = React.useState(0)
  const [filter, setFilter] = React.useState({ sort: '', query: '' })
  const [modal, setModal] = React.useState(false)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const pagesArray = Array.from({length: totalPages}, (e, i) => i + 1)
  
 const [fetchPosts, isLoading, postError] = useFetching(async ()=> {
    const responce = await PostService.getAll(limit, page)
      setPosts(responce.data)
   const totalCount = responce.headers['x-total-count']
   setTotalPages(getPagesCount(totalCount, limit))
 })
 
  React.useEffect(() => {
    fetchPosts()
  }, [page])



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage  = (page) => {
    setPage(page)
  }

  return (
    <main>
      <MyButton onClick={() => setModal(true)}>Add post</MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <section>
        {postError && <h1>{postError}</h1>}
        {
          isLoading
          ? <Loader />
          :  <PostList remove={removePost} posts={sortedAndSearchedPosts} />
        }
        <div>
          {pagesArray.map(p => (
      <button
        key={p}
        onClick={()=> changePage(p)}
        className={page === p ? [cl.currentPage, cl.myBtn ].join(' ') : cl.myBtn
        }>{p}</button>))}
        </div>
      </section>
    </main>
  )
}
