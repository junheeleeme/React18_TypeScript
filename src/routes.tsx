import React from 'react'
import About from './Pages/About'
import Home from './Pages/Home'

interface routesType {
  id: number
  title: string
  path: string
  element: React.ReactElement
}

export const routes: Array<routesType> = [
  { id: 0, title: 'Home', path: '/', element: <Home /> },
  { id: 0, title: 'About', path: '/about', element: <About /> },
]
