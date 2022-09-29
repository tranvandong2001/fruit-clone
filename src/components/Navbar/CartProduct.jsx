import styles from "./Navbar.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../redux/actions";
const CartProduct = ({ productItem, index }) => {
    const selector = useSelector((state) => state.productCart.cart);
    const dispatch = useDispatch();
    const handleRemoveCart = () => {
        dispatch(removeCart(index));
    };
    return (
        <li>
            <div className={styles.cartItem}>
                <div className={styles.cartItemWrap}>
                    <div className={styles.cartInfo}>
                        <img src={productItem.img} alt={productItem.name} />
                        <div className={styles.cartName}>
                            <p>{productItem.name}</p>
                            <p className={styles.cartAmoutWrap}>
                                <span className={styles.cartAmout}>
                                    {selector.amout}
                                </span>
                                1 x{" "}
                                <span className={styles.cartRate}>
                                    {productItem.price}
                                </span>
                            </p>
                        </div>
                        <CloseOutlinedIcon
                            className={styles.cartClose}
                            onClick={handleRemoveCart}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartProduct;
