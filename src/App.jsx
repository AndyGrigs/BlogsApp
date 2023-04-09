
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Comp/navbar/Navbar'
import { routes } from './router/routes'



export default function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
              exact={route.exact}
            />
          ))}

        </Routes>
      </Router>

    </main>
  )
}
