import styles from "./Avatar.module.scss"

const Avatar = ({ letter }) => {
  return (
    <span className={styles.avatar}>{letter}</span>
  )
}
export default Avatar