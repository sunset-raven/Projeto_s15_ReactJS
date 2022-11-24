import { Header } from '../components/Header'
import contactImg from '../assets/Raven-PNG-Image.png'
import styles from  '../styles/pages/inicio.module.css'

export function Inicio() {
    return(
        <>
        <Header 
        title='O cantinho da Andréa Vetter' 
        image={ contactImg }/>
        <h2 className={styles.firstWords}>Bem-vindes a meu espaço! Tire uns minutos pra tomar um café e ver essa página modesta, mas bonita!</h2>
        </>
    )
}