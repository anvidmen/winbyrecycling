import Body from "components/layout/Body/Body"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <Body>
            <h1>Registarte</h1>
            <Link to="/login">Iniciar sesión</Link>
        </Body>
    )
}

export default Register
