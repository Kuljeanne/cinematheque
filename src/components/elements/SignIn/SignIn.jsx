import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineWarning } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

//import { useAuth } from '../../../hooks/useAuth'
import { getUser } from '../../../store/authSlice/authSlice.js'
import styles from './SignIn.module.scss'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userSignUp = (data) => {
    dispatch(getUser(data))
  }

  const selector = useSelector((state) => state.auth)

  useEffect(() => {
    if (selector.status === 'auth') navigate('/')
  }, [navigate, selector.status])

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Sign up</h2>

      <form className={styles.form} onSubmit={handleSubmit((data) => userSignUp(data))}>
        <input
          className={styles.input}
          {...register('login', { required: true })}
          type="text"
          name="login"
          placeholder="login"
        />
        <input
          className={styles.input}
          {...register('email', {
            required: 'Email Address is required',
            pattern: {
              value: /([a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z0-9_-]+)/g,
              message: 'Email is not full'
            }
          })}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          className={styles.input}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Min length is 6'
            },
            pattern: {
              value: /(?=.*[0-9])(?=.*[a-z])[0-9a-z]{6,}/g,
              message: 'Password must contain at least 1 number and 1 letter'
            }
          })}
          type="password"
          name="password"
          placeholder="password"
        />
        <div className={styles.errors}>
          {selector.error && (
            <span>
              <AiOutlineWarning />
              {selector.error}
            </span>
          )}
          {errors.login && (
            <span>
              <AiOutlineWarning />
              Login field is required
            </span>
          )}
          {errors.email && (
            <span>
              <AiOutlineWarning />
              {errors.email.message}
            </span>
          )}
          {errors.password && (
            <span>
              <AiOutlineWarning />
              {errors.password.message}
            </span>
          )}
        </div>
        {selector.status === 'loading' ? (
          <p className={styles.loading}>Signing Up ...</p>
        ) : (
          <button className={styles.btn} type="submit">
            Sign Up
          </button>
        )}
      </form>

      <Link to={'/login'} className={styles.link}>
        I already have an account
      </Link>
    </div>
  )
}

export default SignIn
