import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import Header from './components/elements/Header/Header'
import { checkAuth } from './store/authSlice/authSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
