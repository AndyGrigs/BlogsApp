import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../Comp/hooks/useFetching'
import PostService from '../Comp/API/PostService'
import Loader from '../Comp/loader/Loader'

export default function Comments() {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responce = await PostService.getById(params.id)
    setPost(responce.data)
  })

  const [fetchComments, isComLoading, comError] = useFetching(async()=>{
    const responce = await PostService.getCommentsById(params.id)
    setComments(responce.data)
  })

  useEffect(() => {
    fetchPostById()
    fetchComments()
  }, [])

  return (
    <>
    <h1 style={{ color: 'coral' }}> You have visited the page of the post number {params.id} 
    </h1>
     {isLoading
        ? <Loader />
        : <div>{post.title}</div>
      }
      <h2 style={{marginTop: 15}}>Comments to the post</h2>
     {isComLoading
        ? <Loader />
        : <div>
          {comments.map(comm =>(
          <div key={comm.email} style={{marginTop: 15}}>
          <h5>{comm.email}</h5>
            <p>{comm.body}</p>
          </div>
          ))}
        </div>
      }
      
      </>
  )
}