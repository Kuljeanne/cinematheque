import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>Cinematheque</h1>
      <ul>
        <li className={styles.text}>
          Web-site, which help you know more about movies
        </li>
        <li className={styles.text}>
          To find movie you need, enter movie title in the &apos;Search&lsquo; area bellow.
        </li>
        <li className={styles.text}>
          To look at TOP250, click button &apos;Top 250 Movies&lsquo; at the top of this page.
        </li>
        <li className={styles.text}>
          After LogIn you can look through your search history, just open the menu next to your name.
        </li>
        <li className={styles.text}>
          To save any movie just click &apos;like&lsquo; button and it will be saved in you
          favourites list
        </li>
      </ul>
    </div>
  )
}

export default Banner
