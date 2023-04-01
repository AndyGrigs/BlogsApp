
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import About from './pages/About'
import Error from './pages/Error';
import PostIdPage from './pages/PostIdPage'

import Navbar from './Comp/navbar/Navbar'




export default function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route exact path='/posts' element={<Posts />} />
          <Route exact path='/posts/:id' element={<PostIdPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>

    </main>
  )
}
