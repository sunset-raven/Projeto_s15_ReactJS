import { useState } from 'react'
import { Header } from '../components/Header'

import styles from '../styles/pages/contato.module.css'
import contactImg from '../assets/Mimikyu-Pokemon-PNG-Transparent-HD-Photo.png'

export function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleInputValueName(event) {
        setNome(event.target.value)
    }

    function handleInputValueEmail(event) {
        setEmail(event.target.value)
    }

    function handleInputValueMessage(event) {
        setMensagem(event.target.value)
    }

    function handleCreateMessage(event) {
        event.preventDefault()
        console.log(nome, email, mensagem)
    }

    return (
        <>
            <Header
                title="Olá, você!"
                image={contactImg}
            />
            <div>
                <form className={styles.form} onSubmit={handleCreateMessage}>
                    <input
                        className={styles.formInput}
                        placeholder="Digite seu nome"
                        onChange={handleInputValueName}
                    />
                    <input
                        className={styles.formInput}
                        placeholder="Digite seu email"
                        onChange={handleInputValueEmail}
                    />
                    <textarea
                        className={styles.formTextArea}
                        placeholder="Digite sua mensagem"
                        onChange={handleInputValueMessage}
                    />
                    <button type="submit" className={styles.formButton}>Enviar mensagem</button>
                </form>
            </div>
        </>
    )
}