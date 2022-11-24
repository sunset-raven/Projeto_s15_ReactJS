import styles from '../styles/components/header.module.css'

export function Header(props) {

  const uniqueStyle = {
    color: props.color, 
    background: props.background
  }

  return (
    <div style={uniqueStyle} className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{props.title}</h1>
      <img className={styles.headerImage} src={props.image} />
    </div>
  )
}