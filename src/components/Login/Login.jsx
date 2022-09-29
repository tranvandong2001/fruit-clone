import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.loginWrap}>
                <h2>Đăng nhập</h2>
                <form className={styles.loginForm}>
                    <div className={styles.loginFormWrap}>
                        <label htmlFor="email">Phone/Email</label>
                        <input
                            type="text"
                            placeholder="Phone/Email"
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
                            <RemoveRedEyeOutlined className={styles.iconEye} />
                        </div>
                        {/* <p className={styles.error}>
                            Error: Thông tin đăng nhập không chính xác
                        </p> */}
                        <Link to="/" className={styles.forwardPassword}>
                            Quên mật khẩu
                        </Link>
                    </div>
                    <button type="submit" className={styles.loginBtn}>
                        Đăng nhập
                    </button>
                    <Link to="/account/create" className={styles.createAccount}>
                        Tạo tài khoản
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
