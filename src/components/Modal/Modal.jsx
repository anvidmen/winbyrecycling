import { Link } from "react-router-dom";
import styles from "./Modal.module.scss";

const  Modal = () =>{
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}>
                    <h2>Ops!</h2>
                </div>
                <div className={styles.body}>
                    <p>Para acceder a esta sección debes estar logueado</p>
                </div>
                <div className={styles.footer}>
                    <Link className={styles.redirect} to="/login">Iniciar sesión</Link>
                </div>
            </div>
        </div>
    );
}

export default Modal;