export const checkLocalStorage = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  if (action.type === 'auth/logInUser') {
    const user = JSON.parse(localStorage.getItem(action.payload.login))

    if (!user) {
      action.payload.error = 'User is not found'
    } else if (user) {
      if (user.password !== action.payload.password) {
        action.payload.error = 'Password is not correct'
      } else {
        action.payload.error = null
        action.payload.status = 'auth'
        action.payload.login = user.login
        action.payload.email = user.email
        action.payload.password = user.password
        action.payload.history = user.history
        action.payload.favourites = user.favourites
      }
    }
  }

  if (action.type === 'auth/checkAuth') {
    if (getCookie('user')) {
      const login = getCookie('user')
      const user = JSON.parse(localStorage.getItem(login))
      if(user){
        action.payload.error = null
        action.payload.status = user.status
        action.payload.login = user.login
        action.payload.email = user.email
        action.payload.password = user.password
        action.payload.history = user.history
        action.payload.favourites = user.favourites
      }else{
        action.payload.status = 'out'
      }
    }
  }

  let result = next(action)
  return result
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}
