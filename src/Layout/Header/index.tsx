import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '@/routes'

const Header = () => {
  useEffect(() => {
    console.log(123)
  }, [])
  return (
    <header>
      <div className="header-wrap">
        <ul className="nav">
          {routes.map((r) => (
            <li key={r.id} className="nav-item">
              <Link to={r.path}>{r.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
