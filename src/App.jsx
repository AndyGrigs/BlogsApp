
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyShearedNavbar from './commonLayout/MyShearedNavbar'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import PostIdPage from './pages/PostIdPage'
import ProtectedRoute from './pages/ProtectedRoute'
import Dashboard from './pages/Dashboard' 
import Login from './pages/Login'


export default function App() {
  const[user, setUser] = React.useState(null)
  
  return (
    <main>
      <Router>
        <Routes>
         <Route path='/' element={<MyShearedNavbar/>}>
           <Route index element={<Home />}/>
           <Route path='about' element={<About />}/>

           <Route exact path='posts' element={<Posts />}/>
           <Route exact path='posts/:id' element={<PostIdPage />}/>

           <Route path='login' element={<Login setUser={setUser}></Login>} />
           <Route 
             path='dashboard'
             element={
               <ProtectedRoute user={user}>
                  <Dashboard user={user}/>
               </ProtectedRoute>
             }
             />
           
             <Route path='*' element={<Error/>} />
         </Route>
        </Routes>
      </Router>

    </main>
  )
}
