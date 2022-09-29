import styles from "./ShopCart.module.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/actions";

const ShopCartItem = ({ item, index }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeCart(index));
    };
    const screenWidth = window.screen.width;
    const totals = JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart")).reduce((acc, item) => {
              return (acc += +item.price);
          }, 0)
        : [];
    return (
        <>
            {screenWidth > 768 && (
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">
                                <img src={item.img} alt="" />
                            </Link>
                        </td>
                        <td>
                            <Link
                                to={`product/${item.id}`}
                                className={styles.linkItem}
                            >
                                {item.name}
                            </Link>
                        </td>
                        <td>{item.price}</td>
                        <td>
                            <input type="number" min={1} max={10} />
                        </td>
                        <td>
                            {item.price}
                            <CloseIcon
                                className={styles.closeIcon}
                                onClick={handleDelete}
                            />
                        </td>
                    </tr>
                </tbody>
            )}
            {screenWidth < 768 && (
                <div className={styles.navMobile}>
                    <div className={styles.navMobileWrap}>
                        <div className={styles.navMobileImg}>
                            <Link to="/">
                                <img src={item.img} alt="" />
                            </Link>
                            <Link
                                to={`product/${item.id}`}
                                className={styles.linkItem}
                            >
                                {item.name}
                            </Link>
                        </div>
                        <CloseIcon
                            className={styles.closeIconMobile}
                            onClick={handleDelete}
                        />
                    </div>
                    <div className={styles.navMobileBottom}>
                        <div className={styles.navMobileBottom__info}>
                            <span>Giá:</span> <span>{item.price} VND</span>
                        </div>
                        <div className={styles.navMobileBottom__info}>
                            <span>Số lượng</span>{" "}
                            <input type="number" min="1" max="1" value="1" />
                        </div>
                        <div className={styles.navMobileBottom__info}>
                            <span>Tổng</span> <span>{totals}.000 VND</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ShopCartItem;
