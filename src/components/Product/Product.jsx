import styles from "./Product.module.css";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import { fruitData } from "../data/FruitData";
import { useEffect } from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Product = () => {
    const [openAlert, setOpenAlert] = useState(false);
    const param = useParams();
    const productChild = fruitData.find(
        (product) => product.id.toString() === param.productId
    );

    const handleAddCart = () => {
        setOpenAlert(true);
        const arrayNew = JSON.parse(localStorage.getItem("cart")).concat(
            productChild
        );
        localStorage.setItem("cart", JSON.stringify(arrayNew));
    };
    useEffect(() => {
        const time = setTimeout(() => {
            setOpenAlert(false);
        }, 2000);
        return () => {
            clearTimeout(time);
        };
    }, [openAlert]);

    const images = [
        {
            original: `${productChild.imgThumb[0]}`,
            thumbnail: `${productChild.imgThumb[0]}`,
        },
        {
            original: `${productChild.imgThumb[1]}`,
            thumbnail: `${productChild.imgThumb[1]}`,
        },
        {
            original: `${productChild.imgThumb[2]}`,
            thumbnail: `${productChild.imgThumb[2]}`,
        },
    ];

    return (
        <div className={styles.product}>
            <div className={styles.productWrap}>
                <div className={styles.productWrapper}>
                    <div className={styles.productLeft}>
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                            fullscreen={false}
                            showFullscreenButton={false}
                            disableSwipe={false}
                            orginalHeight="400px"
                            originalClass={styles.imgProduct}
                        />
                    </div>
                    <div className={styles.productRight}>
                        <div className={styles.productRightWrap}>
                            <h3 className={styles.productRightTitle}>
                                {productChild.name}
                            </h3>
                            <p className={styles.more}>
                                {productChild.nameMore}
                            </p>
                            <div
                                style={{
                                    border: "1px solid #ccc",
                                    margin: "20px 0",
                                }}
                            ></div>
                            <div className={styles.informationWrap}>
                                <div className={styles.information}>
                                    <span className={styles.informationText}>
                                        ????n v???:
                                    </span>
                                    <span className={styles.informationTexts}>
                                        {productChild.unit}
                                    </span>
                                </div>
                                <div className={styles.information}>
                                    <span className={styles.informationText}>
                                        Ngu???n g???c:
                                    </span>
                                    <span className={styles.informationTexts}>
                                        {productChild.source}
                                    </span>
                                </div>
                                <div className={styles.information}>
                                    <span className={styles.informationText}>
                                        T??nh tr???ng:
                                    </span>
                                    <span className={styles.informationTexts}>
                                        {productChild.status}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.price}>
                                <span className={styles.pricePrimary}>
                                    {productChild.price} ??
                                </span>
                                <span className={styles.discount}>
                                    {productChild.sale} ??
                                </span>
                            </div>
                            <div className={styles.pay}>
                                <p>S??? L?????NG</p>
                                <div className={styles.payWrap}>
                                    <input type="number" min={1} max={10} />
                                    <button onClick={handleAddCart}>
                                        Th??m v??o gi???
                                    </button>
                                    <button>Mua ngay </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.productDetail}>
                    <h3>M?? t???</h3>
                    <div className={styles.productDetailWrap}>
                        <div className={styles.productDetails}>
                            <h2>Ngu???n g???c</h2>
                            <p>{productChild.source}</p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>S??? l?????ng</h2>
                            <p>{productChild.count}</p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>T??m t???t</h2>
                            <p>
                                T??o c?? m??u ????? xen l???n v??ng. Qu??? nh???, c???m n???ng
                                tay. M???c d?? kh??ng c?? h??nh th???c ?????p nh?? Envy hay
                                Rockit nh??ng ch???t l?????ng r???t ngon v?? gi?? th??nh
                                h???p l??, l?? l???a ch???n h??ng ?????u cho c??c gia ????nh ?????
                                th?????ng th???c h??ng ng??y.
                            </p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>V???</h2>
                            <p>gi??n, ng???t thanh, c???ng qu???</p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>Dinh d?????ng</h2>
                            <p>
                                M???t qu??? t??o Fuji Nam Phi c?? th??? cung c???p kho???ng
                                4g ch???t x??, 8mg vitamin C, 95 Kalo, magie, k???m,
                                ph???tpho v?? h??m l?????ng l???n c??c ch???t ch???ng oxy.
                                Ch??ng gi??p ng?????i s??? d???ng gi???m nguy c?? b??o ph??,
                                ti???u ???????ng, ch???ng l???i b???nh ung th?? gan, ung th??
                                v??.. T??o ???????c s??? d???ng ????? ??n ngay ho???c l??m n?????c
                                ??p u???ng bu???i s??ng r???t t???t cho s???c kho???
                            </p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>B???o qu???n</h2>
                            <p>
                                T??o n??n ???????c b???o qu???n ??? nhi???t ????? m??t trong t???
                                l???nh t??? 0 ?????n 4 ????? C ????? t??o lu??n c?? ????? gi??n
                                ng???t. Sau kho???ng 3 th??ng, ????? ???????ng t??ng cao, ?????
                                PSI (????? x???p) s??? cao h??n l??m t??o m???t ????? gi??n.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {openAlert && (
                <Stack className={styles.alertAddCart} spacing={2}>
                    <Alert
                        onClose={() => {
                            setOpenAlert(false);
                        }}
                    >
                        S???n ph???m <strong>{productChild.name}</strong> ???? ???????c
                        th??m v??o gi??? h??ng
                    </Alert>
                </Stack>
            )}
        </div>
    );
};

export default Product;
