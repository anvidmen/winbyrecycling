import { BsGithub } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"
import { ImMail4 } from "react-icons/im"
import logo from "assets/images/logo.png"
import styles from "./Footer.module.scss"
const Footer = () => {
    return (
        <footer className={styles.footerDistributed}>
            <div className={styles.footerLeft}>
                <img alt="logo" src={logo} />
                <p className={styles.footerLinks}>
                    <a href="/" className={styles.links}>Inicio</a>
                    <a href="/about">Sobre nosotros</a>
                    <a href="/games">Juegos</a>
                    <a href="/contact">Contacto</a>
                </p>
                <p className={styles.footerCompanyName}>Gana Reciclando © 2022</p>
            </div>
            <div className={styles.footerCenter}>
                <div>
                    <FaMapMarkerAlt size={28} />
                    <p>Barcelona, España</p>
                </div>
                <div>
                    <ImMail4 size={28} />
                    <p><a href="mailto:winbyrecycling@gmail.com">winbyrecycling@gmail.com</a></p>
                </div>
            </div>
            <div className={styles.footerRight}>
                <p className={styles.footerCompanyAbout}>
                    <span>Sobre Gana Reciclando</span>
                    Es una página que por medio de juegos incentiva a niños a crear una conciencia sobre cómo cuidar el medio ambiente desde algo muy básico como reciclar.
                </p>
                <div className={styles.footerIcons}>
                    <a href="https://github.com/anvidmen/winbyrecycling" target="_blank" rel="noopener noreferrer"><BsGithub size={32} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
