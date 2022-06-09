import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { validatedEmail, validatedName } from 'utils/validations'
import Body from 'components/layout/Body/Body'
import contact from 'assets/images/contact.jpeg'
import styles from './Contact.module.scss'

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        let { name, email } = e.target
        name = name.value
        email = email.value

        if (name.trim() === '' || email.trim() === '') {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
            })
        }

        if (validatedName(name) === false) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Formato del nombre no es valido'
            })
        }

        if (validatedEmail(email) === false) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Formato del email no es valido'
            })
        }

        try {
            await emailjs.sendForm('service_yh3oiaa', 'template_5rqq7qe', form.current, 'LQ588QouS1DL8SU0s')
            e.target.reset();
            return Swal.fire({
                icon: 'success',
                text: 'Tu mensaje a sido enviado'
            })
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
            <div className={styles.main}>
                <div className={styles.mainBody}>
                    <img alt="contact" src={contact}></img>
                </div>
                <form ref={form} className={styles.mainForm} onSubmit={sendEmail}>
                    <h2>Contactanos</h2>
                    <div>
                        <label>Nombre</label> <br />
                        <input
                            autoComplete="off"
                            type="text"
                            placeholder="Introduce tu nombre"
                            name="name"
                            id='name'
                        />
                    </div>
                    <div className={styles.formElement}>
                        <label>Email</label> <br />
                        <input
                            autoComplete="off"
                            placeholder="Introduce tu email"
                            name="email"
                            id='email'
                        />
                    </div>
                    <div className={styles.formElement}>
                        <label>Mensaje</label>
                        <textarea
                            name="message"
                            id='msg' rows="5"
                            placeholder="Pregunta/deja tu comentario..."
                        />
                    </div>
                    <input className={styles.submit} type="submit" value="Enviar" />
                </form>
            </div>
        </Body>
    );
}

export default Contact
