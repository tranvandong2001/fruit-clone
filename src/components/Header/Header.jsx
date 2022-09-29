import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <a href="/">
                <div className={styles.headerWrap}></div>
            </a>
        </div>
    );
};

export default Header;
