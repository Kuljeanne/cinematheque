import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>Cinematheque</h1>
      <p className={styles.text}>Web-site, which help you know more about movie, serial and cast information.</p>
    </div>
  )
}

export default Banner