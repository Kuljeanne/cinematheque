import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login', isAuth }) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace={true} />
  }
  return <Outlet />
}

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string
}
