import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom'

export const UnprotectedRoute = ({ redirectPath = '/', isAuth }) => {
  if (isAuth) {
    return <Navigate to={redirectPath} replace={true} />
  }
  return <Outlet />
}

UnprotectedRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string
}