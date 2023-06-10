import { useContext } from 'react'

import { TelegramContext } from './TelegramProvider'

export const useTelegramContext = () => {
  const feature = useContext(TelegramContext)
  return feature

}
