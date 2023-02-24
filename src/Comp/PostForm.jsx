import React from "react"
import MyButton from "./button/MyButton.jsx"
import MyInput from "./input/MyInput.jsx"
import { nanoid } from 'nanoid'


const PostForm = ({create}) => {
const[post, setPost] = React.useState({title: '', body: ''})

  const addPost = (e) =>{
    e.preventDefault()
    const newPost = {...post, id: nanoid()}
    create(newPost)
    setPost({title: '', body: ''})
  }
  return (

  <form>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          placeholder='title' />
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          placeholder='post'/>
        <MyButton onClick={addPost}>
          Create post
        </MyButton>
      </form>

  )
}

export default PostForm
