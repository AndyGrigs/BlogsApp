
import React from 'react'
import './App.css'

import PostList from "./Comp/PostList.jsx"
import PostForm from "./Comp/PostForm.jsx"
import PostFilter from './Comp/PostFilter.jsx'
import MyModal from './Comp/modal/MyModal'
import MyButton from './Comp/button/MyButton'
import { usePosts } from './Comp/hooks/usePosts'
import PostService from './Comp/API/PostService'
import Loader from './Comp/loader/Loader'
import {useFetching} from  './Comp/hooks/useFetching'



export default function App() {
  const [posts, setPosts] = React.useState([])
  const [totalCount, setTotalCount] = React.useState(0)

  const [filter, setFilter] = React.useState({ sort: '', query: '' })
  const [modal, setModal] = React.useState(false)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  
 const [fetchPosts, isLoading, postError] = useFetching(async ()=> {
    const responce = await PostService.getAll(limit, page)
      setPosts(responce.data)
   setTotalCount(responce.headers['x-total-count'])
   console.log(responce.headers['x-total-count'])
 })

 
  React.useEffect(() => {
    fetchPosts()
  }, [])



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

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
      </section>
    </main>
  )
}
