import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import Header from './components/elements/Header/Header'
import { TelegramContext } from './context/TelegramProvider'
import { checkAuth } from './store/userSlice/userSlice'

const App = () => {
  const [feature, setFeature] = useState(false)
  const toggleFeature = () => {
    setFeature(!feature)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth({}))
  }, [dispatch])

  return (
    <TelegramContext.Provider value={{ feature, toggleFeature }}>
      <Header />
      <Outlet />
    </TelegramContext.Provider>
  )
}

export default App
