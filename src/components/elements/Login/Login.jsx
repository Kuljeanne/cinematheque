import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import styles from './Login.module.scss'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Log In</h2>

      <form className={styles.form} onSubmit={handleSubmit((data) => console.log(data))}>
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
        <div>
          {errors.login && <span>Login field is required</span>}
          {errors.password && <span>{errors.password.message}</span>}
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
