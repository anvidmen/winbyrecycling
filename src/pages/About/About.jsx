import Body from "components/layout/Body/Body"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { TbWorld } from "react-icons/tb"
import juan from "assets/images/juan.JPG"
import team from "assets/images/team.jpeg"
import sheila from "assets/images/sheila.jpeg"
import adrian from "assets/images/adrian.jpeg"
import mel from "assets/images/mel.jpeg"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

import styles from "./About.module.scss"

const About = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yh3oiaa', 'template_5rqq7qe', form.current, 'LQ588QouS1DL8SU0s')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
      <Body>
        <h2 className={styles.title}>Quiénes somos</h2>
        <div className={styles.image}>
          <img alt="group" src={team} />
        </div>
        <div className={styles.paragraph}>
          <p>
            Somos un grupo de personas que ayuda a concientizar a los más
            pequeños a integrar el reciclaje en su día a día mediante juegos e
            información educativa para promover la reducción de residuos.
          </p>
          <p>
            Desde Gana Reciclando facilitamos que entre todos, a partir de una
            forma divertida, hagamos posible un mundo más sostenible y mejoremos
            el medio ambiente.
          </p>
          <p>
            Nuestro propósito es conseguir que la educación ambiental esté al
            alcance de todos y a partir de ahí mejorar el entorno y la vida de
            las personas.
          </p>
        </div>
        <h2 className={styles.members}>Integrantes</h2>
        <div className={styles.group}>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.imgBox}>
                <img src={juan} alt="juan-omen" />
              </div>
              <div className={styles.content}>
                <h3>Juan David Omen</h3>
                <div>
                  <a
                    href="https://www.linkedin.com/in/juan-om/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin size={32} />
                  </a>
                  <a
                    href="https://github.com/anvidmen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub size={32} />
                  </a>
                  <a
                    href="https://anvidmen.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbWorld size={32} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.imgBox}>
                <img src={sheila} alt="sheila" />
              </div>
              <div className={styles.content}>
                <h3>Sheila Marín</h3>
                <div>
                  <a
                    href="https://www.linkedin.com/in/sheila-mar%C3%ADn-a48256228/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin size={32} />
                  </a>
                  <a
                    href="https://github.com/sheilamarinc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub size={32} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.imgBox}>
                <img src={mel} alt="mel" />
              </div>
              <div className={styles.content}>
                <h3>Mel Aubets Serra</h3>
                <div>
                  <a
                    href="https://www.linkedin.com/in/mel-aubets-serra/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin size={32} />
                  </a>
                  <a
                    href="https://github.com/MelAubets"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub size={32} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.imgBox}>
                <img src={adrian} alt="adrian" />
              </div>
              <div className={styles.content}>
                <h3>Adrian Nuñez Martin</h3>
                <div>
                  <a
                    href="https://www.linkedin.com/in/adrian-nu%C3%B1ez-martin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin size={32} />
                  </a>
                  <a
                    href="https://github.com/hachi22"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub size={32} />
                  </a>
                  <a
                    href="https://www.hachinima.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbWorld size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Body>
    );
}

export default About
