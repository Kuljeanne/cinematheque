export const saveUserData = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  const result = next(action)
  const { user } = store.getState()
  console.log(action)
  if (user?.email) {
    localStorage.setItem(user.login, JSON.stringify(user))
    document.cookie = `user=${user.login}`
  }
  if (action.type === 'auth/removeUser') {
    document.cookie = `user=${user.login}; max-age=-1`
  }

  return result
}
