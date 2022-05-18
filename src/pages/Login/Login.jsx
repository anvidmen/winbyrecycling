import Body from "components/layout/Body/Body"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <Body>
            <h1>Inciar sesión</h1>
            <Link to="/register">Registarte</Link>
        </Body>
    )
}

export default Login
