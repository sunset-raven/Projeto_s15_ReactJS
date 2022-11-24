import { useState, useEffect } from "react"
import { Header } from '../components/Header'
import Axios from 'axios'
import portfolioImage from '../assets/Machop-Pokemon-Transparent-PNG.png'
import styles from '../styles/pages/portfolio.module.css'
import { MarkGithubIcon } from '@primer/octicons-react'

export function Portfolio() {
    const [reposFromApi, setReposFromApi] = useState([])
    const [searchedTerm, setSearchedTerm] = useState('')
    const [filteredRepos, setfilteredRepos] = useState([])
    const baseURL = 'https://api.github.com/users/sunset-raven/repos'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setReposFromApi(response.data)
        }
        getData()
    }, [])

    function handleSearch(event) {
        setSearchedTerm(event.target.value)
    }

    useEffect(() => {
        const filtered = reposFromApi.filter(repository => {
            return repository.name.includes(searchedTerm)
        })
        setfilteredRepos(filtered)
    }, [reposFromApi, searchedTerm])

    return (
        <div>
            <Header title='Página em constante construção...' image={portfolioImage} />
            <input className={styles.repoInput} placeholder="Digite sua busca" onChange={handleSearch}  />
            {
                filteredRepos.map(repository => {
                    return (
                        <div key={repository.name}>
                            <div className={styles.repoInfo}>
                                <p>{repository.name}</p>
                                <div className={styles.linkInfo}>
                                    <a href={repository.html_url}>conferir</a>
                                    <MarkGithubIcon className={styles.icon} />
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>

    )
}