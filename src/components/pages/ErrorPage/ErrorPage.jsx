import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.title}>Something went wrong...<br/>Please try again later</h3>
        <p className={styles.text}>
          <q>Mistakes are always forgivable, if one has the courage to admit them.</q>
          <br /> -Bruce Lee
        </p>
      </div>
    </div>
  )
}

export default ErrorPage
