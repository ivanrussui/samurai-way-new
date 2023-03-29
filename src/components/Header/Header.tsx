import styles from './Header.module.css';
import logo from "../../logo.svg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src={logo}
                alt={"logo"}
            />
        </header>
    );
}