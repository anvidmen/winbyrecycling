import Navbar from "components/layout/NavBar/NavBar";
import Footer from "components/layout/Footer/Footer";
import styles from "./Body.module.scss"

const Body = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className={styles.mainContainer}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Body;