import React from "react";
import MyInput from '../Comp/input/MyInput'
import MyButton from '../Comp/button/MyButton'
import { useNavigate } from "react-router-dom";

export default function Login({setUser}) {
  const[name, setName] = React.useState('')
  const[email, setEmail] = React.useState('')

  const navigate = useNavigate()

const handleSubmit = async (event) => {
  event.preventDefault()
  if(!name || !email) return;
  setUser({name: name, email: email})
  navigate('/dashboard')
}
  
  return (
<div className="allPosts">
<h1>The page for signing in </h1>
    <form onSubmit={handleSubmit}>
       <MyInput 
         type='text' 
         placeholder='enter your login'
         id='name'
         value={name}
         onChange={(event) => setName(event.target.value)}
         />
       <MyInput 
         type='email' 
         placeholder='enter your email'
         id='email'
         value={email}
         onChange={(event) => setEmail(event.target.value)}
         />
      <MyButton type='submit'>Login</MyButton>
    </form>

</div>
  )
}