import styles from "./ShopCart.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShopCartItem from "./ShopCartItem";
import { Link } from "react-router-dom";

const ShopCart = () => {
    const getItem = JSON.parse(localStorage.getItem("cart"));
    const screenWidth = window.screen.width;
    const totals = JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart")).reduce((acc, item) => {
              return (acc += +item.price);
          }, 0)
        : [];
    return (
        <div className={styles.shopCart}>
            <div className={styles.shopCartWrap}>
                <div className={styles.links}>
                    <Link
                        to="/"
                        style={{ color: "#3d464d", textDecoration: "none" }}
                    >
                        Trang chủ
                    </Link>
                    <ArrowForwardIosIcon />
                    <span>Giỏ hàng</span>
                </div>
                <h3 className={styles.title}>Giỏ hàng</h3>
                {screenWidth > 768 && (
                    <table className={styles.tables}>
                        <tbody>
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng</th>
                            </tr>
                        </tbody>

                        {getItem.map((item, index) => (
                            <ShopCartItem
                                key={index}
                                index={index}
                                item={item}
                            />
                        ))}
                    </table>
                )}
                {screenWidth < 768 && (
                    <div className={styles.cartMobile}>
                        {getItem.map((item, index) => (
                            <ShopCartItem
                                key={index}
                                index={index}
                                item={item}
                            />
                        ))}
                    </div>
                )}

                <div className={styles.continueShopping}>
                    <button>
                        <Link to="/">Tiếp tục mua hàng</Link>
                    </button>
                    <button>Cập nhật giỏ hàng</button>
                </div>

                <div className={styles.order}>
                    <div className={styles.orderWrap}>
                        <h2>Đơn hàng</h2>
                        <div className={styles.money}>
                            <h3>Thành tiền</h3>
                            <span>{totals}.000 VND</span>
                        </div>
                        <p>Phí trên bao gồm 5% VAT</p>
                        <button>Tiến hành thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;
