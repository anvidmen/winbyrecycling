import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import loginUser from "logic/login-user"
import Swal from 'sweetalert2'
import Body from "components/layout/Body/Body"
import styles from "./Login.module.scss"
import image from "assets/images/wellcome.png"

const Login = ({ handleToken }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        let { username, password } = e.target

        username = username.value
        password = password.value

        if (username.trim() === '' || password.trim() === '') {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
            })
        }

        try {
            const user = await loginUser(username, password)
            handleToken(user)
            navigate('/')
        } catch (error) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            })
        }
    }

    return (
        <Body>
            <div className={styles.loginform}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.imageContainer}>
                        <img alt="wellcome to login" src={image} />
                    </div>
                    <h2 className={styles.headerTitle}>Bienvenido</h2>
                    <div className={styles.row}>
                        <label>Usuario</label>
                        <input
                            type="text"
                            placeholder="Introducir usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id='username'
                            autoComplete="username"
                        />
                    </div>
                    <div className={styles.row}>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="Introducir contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id='password'
                            autoComplete="current-password"
                            required
                        />
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
