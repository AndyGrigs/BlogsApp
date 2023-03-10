import React from "react"
import PostItem from "./PostItem.jsx"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const PostList = ({ posts, remove }) => {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>There are NOT any posts!</h1>
    )
  }

  return (

    <div>
      <h1 style={{textAlign: 'center'}}>All posts</h1>
      <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} num={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>

    </div>

  )
}

export default PostList
