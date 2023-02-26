
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



export default function App() {
  const [posts, setPosts] = React.useState([])

  const [filter, setFilter] = React.useState({ sort: '', query: '' })
  const [modal, setModal] = React.useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setIsLoading(true)
    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPosts(posts)
    setIsLoading(false)

    }, 1000)
  }

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
        {
          isLoading
          ? <Loader />
          :  <PostList remove={removePost} posts={sortedAndSearchedPosts} />
        }
      </section>
    </main>
  )
}
