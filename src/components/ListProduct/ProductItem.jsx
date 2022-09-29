import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";
import Alert from "@mui/material/Alert";
import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { memo } from "react";

var fruitArray = JSON.parse(localStorage.getItem("cart")) || [];
const ProductItem = ({ fruit }) => {
    const [openAlert, setOpenAlert] = useState(false);
    const dispatch = useDispatch();

    const handleAddCart = () => {
        setOpenAlert(true);
        // dispatch(addCart(fruit));
        const item = JSON.parse(localStorage.getItem("cart")).find(
            (item, index) => {
                return item.id === fruit.id;
            }
        );

        if (item) {
            // item.quantity++;
            // console.log(item.quantity);
            // localStorage.setItem("cart", JSON.stringify(fruitArray));
            window.alert("Bạn đã thêm sản phẩm này rồi!");
            setOpenAlert(false);
            return;
        } else {
            fruitArray.push(fruit);
            localStorage.setItem("cart", JSON.stringify(fruitArray));
        }
    };

    useEffect(() => {
        const time = setTimeout(() => {
            setOpenAlert(false);
        }, 2000);
        return () => {
            clearTimeout(time);
        };
    }, [openAlert]);

    return (
        <div className={styles.productItem}>
            <div className={styles.productItems}>
                <div className={styles.productItemWrap}>
                    <Link to={`product/${fruit.id}`}>
                        <img src={fruit.img} alt="" />
                    </Link>
                    <div className={styles.options}>
                        <div className={styles.nameFruit}>
                            <p>{fruit.name}</p>
                        </div>
                        <div className={styles.priceFruit}>
                            <span className={styles.pricePrimary}>
                                {fruit.price} đ
                            </span>
                            <span className={styles.discount}>
                                {fruit.sale} đ
                            </span>
                            <span style={{ fontWeight: "600" }}>/thùng</span>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.buyFruit}
                    // style={{ display: "none" }}
                >
                    <button onClick={handleAddCart}>Thêm giỏ hàng</button>
                    <button>
                        <Link to="/account/login">Mua ngay</Link>
                    </button>
                </div>
            </div>
            {openAlert && (
                <Stack className={styles.alertAddCart} spacing={2}>
                    <Alert
                        onClose={() => {
                            setOpenAlert(false);
                        }}
                    >
                        Sản phẩm <strong>{fruit.name}</strong> đã được thêm vào
                        giỏ hàng
                    </Alert>
                </Stack>
            )}
        </div>
    );
};

export default memo(ProductItem);
