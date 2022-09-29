import styles from "./Footer.module.css";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import Visa from "../../assets/visa.jpg";
const Footer = () => {
    return (
        <div style={{ borderTop: "1px solid #ccc" }}>
            <div className={styles.footer}>
                <div className={styles.footerWrap}>
                    <div className={styles.footerItem}>
                        <h3 className={styles.footerName}>Liên hệ</h3>
                        <div className={styles.footerIcon}>
                            <AccessTimeOutlinedIcon />
                            <span>Mon-Sat 8:00 A.M - 7:00 P.M</span>
                        </div>
                        <div className={styles.footerIcon}>
                            <MarkunreadOutlinedIcon />
                            <span>contact@f5fruitshop.vn</span>
                        </div>
                        <div className={styles.footerIcon}>
                            <PhoneIphoneOutlinedIcon />
                            <span>1900.988.922</span>
                        </div>
                    </div>

                    <div className={styles.footerItem}>
                        <h3 className={styles.footerName}>Thông tin</h3>
                        <div className={styles.footerIcon}>
                            <a href="">Về chúng tôi</a>
                        </div>
                        <div className={styles.footerIcon}>
                            <a href="">Chính sách bảo mật</a>
                        </div>
                        <div className={styles.footerIcon}>
                            <a href="">Chính sách chung</a>
                        </div>
                        <div className={styles.footerIcon}>
                            <a href="">Điều khoản sử dụng</a>
                        </div>
                        <div className={styles.footerIcon}>
                            <a href="">Liên hệ</a>
                        </div>
                    </div>

                    <div className={styles.footerItem}>
                        <h3 className={styles.footerName}>Hợp tác</h3>
                        <div className={styles.footerIcon}>
                            <a href="">Chính sách đối tác</a>
                        </div>
                        <div className={styles.footerIcon}>
                            <a href="">Chính sách chi nhánh</a>
                        </div>
                        <div className={styles.footerIcon}>
                            <a href="">Chính sách cộng tác viên</a>
                        </div>
                    </div>

                    <div className={styles.footerItem}>
                        <h3 className={styles.footerName}>Thanh toán</h3>
                        <div className={styles.footerImg}>
                            <div className={styles.footerImgWrap}>
                                <img src={Visa} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
