import styles from '../styles/components/footer.module.css'

export function Footer(props) {

    const uniqueStyle = {
        color: props.color,
        background: props.background
    }

    return (
        <footer style={uniqueStyle} className={styles.footerContainer}>
            <p className={styles.footerText}>♡♡♡♡♡</p>
        </footer>
    )
}