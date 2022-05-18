import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiOutlineUser } from "react-icons/ai"
import logo from "assets/images/logo.png"
import styles from "./navBar.module.scss"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link to='/' className={styles.logo}>
                    <img alt="logo" src={logo} />
                    <h1>Gana Reciclando</h1>
                </Link>
                <div className={`${styles.linksContainer} ${styles.linksDecoration}`}>
                    <Link to="/">Inicio</Link>
                    <Link to="/about">Sobre nosotros</Link>
                    <Link to="/games">Juegos</Link>
                    <Link to="/contact">Contacto</Link>
                </div>
            </div>
            <div className={styles.sign}>
                <Link to="/login">
                    <AiOutlineUser size={32} />
                </Link>
            </div>
            <div className={styles.menu}>
                {toggleMenu
                    ? <RiCloseLine size={32} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line size={32} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className={`${styles.menuContainer} ${styles.linksDecoration}`}>
                        <Link to="/">Inicio</Link>
                        <Link to="/about">Sobre nosotros</Link>
                        <Link to="/games">Juegos</Link>
                        <Link to="/contact">Contacto</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;