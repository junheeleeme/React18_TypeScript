import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

    const root = document.getElementById("App") as HTMLElement

ReactDom.createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
)
