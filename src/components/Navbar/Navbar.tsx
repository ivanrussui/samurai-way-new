import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.Nav}>
            <div>
                Profile
            </div>
            <div>
                Messages
            </div>
            <div>
                Users
            </div>
            <div>
                News
            </div>
            <div>
                Music
            </div>
            <div className={styles.Settings}>
                Settings
            </div>
        </nav>
    );
}