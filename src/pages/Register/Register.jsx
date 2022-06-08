import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import registerUser from "logic/register-user"
import Swal from 'sweetalert2'
import Body from "components/layout/Body/Body"
import styles from "./Register.module.scss"
import image from "assets/images/register.png"

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const handleLogin = user => {
        return Swal.fire({
            icon: 'success',
            text: `${user?.username}, te has registrado correctamente`
        })
    }
    
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
            const user = await registerUser(username, password)
            handleLogin(user)
            navigate('/login')
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
            <div className={styles.registerForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.imageContainer}>
                        <img alt="register" src={image} />
                    </div>
                    <h2 className={styles.headerTitle}>Regístrate</h2>
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
                        <button>Registrarse</button>
                    </div>
                    <div className={styles.redirect}>
                        <span>¿Tienes cuenta?</span>
                        <Link to="/login">Iniciar sesión</Link>
                    </div>
                </form>
            </div>
        </Body>
    )
}

export default Register
