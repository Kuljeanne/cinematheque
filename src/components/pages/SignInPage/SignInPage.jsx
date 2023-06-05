import PropTypes from 'prop-types'

import Login from '../../elements/Login/Login'
import SignIn from '../../elements/SignIn/SignIn'
import Logo from '../../ui/Logo/Logo'
import styles from './SignIn.module.scss'

const SignInPage = ({ hasAccount }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Logo link="#" />
        {hasAccount && <Login />}
        {!hasAccount && <SignIn />}
      </div>
    </div>
  )
}

SignInPage.propTypes = {
  hasAccount: PropTypes.bool.isRequired
}

export default SignInPage
