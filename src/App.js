import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import Header from './components/elements/Header/Header'
import { TelegramProvider } from './context/TelegramProvider'
import { checkAuth } from './store/userSlice/userSlice'

const App = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth({}))
  }, [dispatch])

  return (
    <TelegramProvider>
      <Header />
      <Outlet />
    </TelegramProvider>
  )
}

export default App
