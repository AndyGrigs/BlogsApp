import React from "react"
import MyButton from "./button/MyButton.jsx"
import {useNavigate} from "react-router-dom"


const MyItem = (props) => {
   const navigate = useNavigate();

  const handleCommentsClick = () => {
    navigate(`/posts/${props.post.id}/comments`);
  };
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
        <MyButton onClick={handleCommentsClick}>Open comments </MyButton>
      </div>
    </div>

  )
}

export default MyItem
