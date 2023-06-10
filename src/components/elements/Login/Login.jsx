import { useForm } from 'react-hook-form'
import { AiOutlineWarning } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logInUser } from '../../../store/userSlice/userSlice'
import styles from './Login.module.scss'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const logIn = (login, password) => {
    dispatch(logInUser({ login, password }))
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Log In</h2>

      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => logIn(data.login, data.password))}>
        <input
          className={styles.input}
          {...register('login', { required: true })}
          type="text"
          name="login"
          placeholder="login"
        />
        <input
          className={styles.input}
          {...register('password', {
            required: 'Password is required'
          })}
          type="password"
          name="password"
          placeholder="password"
        />
        <div className={styles.errors}>
          {user.error && (
            <span>
              <AiOutlineWarning />
              {user.error}
            </span>
          )}
          {errors.login && (
            <span>
              <AiOutlineWarning />
              Login field is required
            </span>
          )}
          {errors.password && (
            <span>
              <AiOutlineWarning />
              {errors.password.message}
            </span>
          )}
        </div>

        <button className={styles.btn} type="submit">
          Log In
        </button>
      </form>

      <Link to={'/signup'} className={styles.link}>
        or Create new account
      </Link>
    </div>
  )
}

export default Login
