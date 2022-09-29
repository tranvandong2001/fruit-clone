import { useSelector } from "react-redux";
import styles from "./ListProduct.module.css";
import ProductItem from "./ProductItem";

const ListProduct = () => {
    const productFind = useSelector((state) => state.productCart.product);
    return (
        <div className={styles.listProduct}>
            <h2>Danh sách sản phẩm</h2>

            {/* <p style={{ textAlign: "center", fontSize: "20px" }}>Loading...</p> */}

            <div className={styles.listProductWrap}>
                {productFind &&
                    productFind.map((fruit, index) => {
                        return <ProductItem key={index} fruit={fruit} />;
                    })}
            </div>
        </div>
    );
};

export default ListProduct;
