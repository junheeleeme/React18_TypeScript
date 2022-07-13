import ReactDom from 'react-dom/client'
import './style/index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('App') as HTMLElement

ReactDom.createRoot(root).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
)
