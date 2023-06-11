import { useEffect } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import { TelegramContext } from './TelegramContext'

export const TelegramProvider = ({ children }) => {
  const [feature, setFeature] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:4200/feature-flag`)
      .then((response) => response.json())
      .then((data) => {
        setFeature(data.isTelegramShareEnabled)
      })
  }, [])

  return (
    <TelegramContext.Provider
      value={{
        feature
      }}>
      {children}
    </TelegramContext.Provider>
  )
}

TelegramProvider.propTypes = {
  children: PropTypes.array
}
