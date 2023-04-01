import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../Comp/hooks/useFetching'
import PostService from '../Comp/API/PostService'
import Loader from '../Comp/loader/Loader'

export default function Comments() {
  const params = useParams()
  const [post, setPost] = useState([])

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responce = await PostService.getById(params.id)
    setPost(responce.data)
  })

  useEffect(() => {
    fetchPostById()
  }, [])

  return (
    <h1 style={{ color: 'coral' }}> You have visited the page of the post number {params.id}
      {isLoading
        ? <Loader />
        : <div>{post.title}</div>
      }

    </h1>
  )
}