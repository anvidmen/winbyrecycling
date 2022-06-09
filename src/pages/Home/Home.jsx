import Body from 'components/layout/Body/Body'
import recycle from 'assets/images/re-use.webp'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <Body>
            <div className={styles.container}>
                <div className={styles.paragraph}>
                    <h1>Reduce, reusa, recicla</h1>
                    <div className={styles.image}>
                        <img alt='recycle' src={recycle}></img>
                    </div>
                    <p>
                        Eres conciente con los residuos que desechas? <br/>
                        El 90% de los residuos se pueden reciclar, por lo que tan sólo el 10% de la basura no es reciclable.
                    </p>
                    <div className={styles.readMore}>
                        <a alt="read more" href='/#'>Leer más...</a>
                    </div>
                </div>
            </div>
        </Body>
    )
}

export default Home
