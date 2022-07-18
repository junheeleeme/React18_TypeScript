import React from 'react'
import Menu1 from './Pages/Menu1'
import Menu2 from './Pages/Menu2'
import Menu3 from './Pages/Menu3'
import Menu4 from './Pages/Menu4'
import Home from './Pages/Home'

interface routesType {
  id: string
  title: string
  path: string
  element: React.ReactElement
}

export const routes: Array<routesType> = [
  { id: '0', title: 'Home', path: '/', element: <Home /> },
  { id: '1', title: 'Menu1', path: '/menu1/123', element: <Menu1 /> },
  { id: '2', title: 'Menu2', path: '/menu2', element: <Menu2 /> },
  { id: '3', title: 'Menu3', path: '/menu3', element: <Menu3 /> },
  { id: '4', title: 'Menu4', path: '/menu4', element: <Menu4 /> },
]
