import Header from './Layout/Header'
import Footer from './Layout/Footer'
import { Routes, Route } from 'react-router'
import { routes } from './routes'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {routes.map((r, idx) => (
            <Route key={r.id} path={r.path} element={r.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
