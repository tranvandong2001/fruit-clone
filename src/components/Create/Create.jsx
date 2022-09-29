import styles from "./Create.module.css";
import { Link } from "react-router-dom";

const Create = () => {
    return (
        <div className={styles.login}>
            <div className={styles.loginWrap}>
                <h2>Tạo tài khoản</h2>
                <form className={styles.loginForm}>
                    <div className={styles.loginFormWrap}>
                        <label htmlFor="name">Tên</label>
                        <input
                            type="text"
                            placeholder="Tên"
                            className={styles.loginInput}
                        />
                    </div>
                    <div className={styles.loginFormWrap}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.loginInput}
                        />
                    </div>
                    <div className={styles.loginFormWrap}>
                        <label htmlFor="password">Mật khẩu</label>
                        <div className={styles.loginIcon}>
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                className={styles.loginInput}
                            />
                        </div>
                        <p className={styles.error}>
                            Mật khẩu phải ít nhất 6 kí tự
                        </p>
                        <div className={styles.loginFormWrap}>
                            <label htmlFor="password">Nhập lại mật khẩu</label>
                            <div className={styles.loginIcon}>
                                <input
                                    type="password"
                                    placeholder="Mật khẩu"
                                    className={styles.loginInput}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={styles.loginBtn}>
                        Đăng kí
                    </button>
                    <Link to="/account/login" className={styles.createAccount}>
                        Đăng nhập
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Create;
