import React from "react"
import MyButton from "./button/MyButton.jsx"


const MyItem = (props) => {
  return (

    <div className='post cyan'>
      <div className='post__wrapper'>
        <h3> {props.post.id}.   {props.post.title}</h3>
        <p className='post__body'>
          {props.post.body}
        </p>
      </div>
      <div className="post__btn">
        <MyButton onClick={()=> props.remove(props.post)}>Delete post</MyButton>
      </div>
    </div>

  )
}

export default MyItem
