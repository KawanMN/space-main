import React from "react"
import twitter from "./twitter.svg"
import instagram from "./instagram.svg"
import github from "./github.svg"
import linkedin from "./linkedin.svg"
import styles from "./Rodape.module.scss"

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a href="https://twitter.com/nakwan_4" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="ícone do twitter" />
                </a>
                <a href="https://www.instagram.com/_srmarques_/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="ícone do instagram" />
                </a>
                <a href="https://github.com/KawanMN" target="_blank" rel="noreferrer">
                    <img src={github} alt="ícone do github" />
                </a>
                <a href="https://www.linkedin.com/in/kawan-marques/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="ícone do linkedin" />
                </a>
            </div>
            <p>Desenvolvido por Kawan Marques</p>
        </footer>
    )
};
