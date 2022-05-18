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
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC.
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
