import Body from "components/layout/Body/Body"
import { Link } from "react-router-dom"
import styles from "./Register.module.scss"
import image from "assets/images/register.png"

const Register = () => {
    return (
        <Body>
            <div className={styles.loginform}>
                <div>
                    <div className={styles.imageContainer}>
                        <img alt="register" src={image} />
                    </div>
                    <h2 className={styles.headerTitle}>Regístrate</h2>
                    <div className={styles.row}>
                        <label>Usuario</label>
                        <input type="text" placeholder="Introducir usuario" />
                    </div>
                    <div className={styles.row}>
                        <label>Contraseña</label>
                        <input type="password" placeholder="Introducir contraseña" />
                    </div>
                    <div className={styles.row}>
                        <button>Registrarse</button>
                    </div>
                    <div className={styles.register}>
                        <span>¿Tienes cuenta?</span>
                        <Link to="/login">Iniciar sesión</Link>
                    </div>
                </div>
            </div>
        </Body>
    )
}

export default Register
