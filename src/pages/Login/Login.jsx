import Body from "components/layout/Body/Body"
import { Link } from "react-router-dom"
import styles from "./Login.module.scss"
import image from "assets/images/wellcome.png"

const Login = () => {
    return (
        <Body>
            <div className={styles.loginform}>
                <form>
                    <div className={styles.imageContainer}>
                        <img alt="wellcome to login" src={image} />
                    </div>
                    <h2 className={styles.headerTitle}>Bienvenido</h2>
                    <div className={styles.row}>
                        <label>Usuario</label>
                        <input type="text" placeholder="Introducir usuario" />
                    </div>
                    <div className={styles.row}>
                        <label>Contraseña</label>
                        <input type="password" placeholder="Introducir contraseña" />
                    </div>
                    <div className={styles.row}>
                        <button>Acceder</button>
                    </div>
                    <div className={styles.redirect}>
                        <span>¿No tienes cuenta?</span>
                        <Link to="/register">Regístrate</Link>
                    </div>
                </form>
            </div>
        </Body>
    )
}

export default Login
