import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h3>404 Not Found</h3>
      <p>
        Back to <Link to="/">Main</Link>
      </p>
    </div>
  )
}

export default NotFound
