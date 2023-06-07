export const saveUserData = (store) => (next) => (action) => {
  
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  const result = next(action)
  const { auth } = store.getState()
  if (auth?.login) {
    localStorage.setItem(auth.login, JSON.stringify(auth))
  }
  if (action.type === 'auth/removeUser') {
    document.cookie = `user=${auth.login}; max-age=-1`
  } else {
    document.cookie = `user=${auth.login}`
  }

  return result
}
