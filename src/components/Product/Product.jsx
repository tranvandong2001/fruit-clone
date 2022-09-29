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
                                        Đơn vị:
                                    </span>
                                    <span className={styles.informationTexts}>
                                        {productChild.unit}
                                    </span>
                                </div>
                                <div className={styles.information}>
                                    <span className={styles.informationText}>
                                        Nguồn gốc:
                                    </span>
                                    <span className={styles.informationTexts}>
                                        {productChild.source}
                                    </span>
                                </div>
                                <div className={styles.information}>
                                    <span className={styles.informationText}>
                                        Tình trạng:
                                    </span>
                                    <span className={styles.informationTexts}>
                                        {productChild.status}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.price}>
                                <span className={styles.pricePrimary}>
                                    {productChild.price} đ
                                </span>
                                <span className={styles.discount}>
                                    {productChild.sale} đ
                                </span>
                            </div>
                            <div className={styles.pay}>
                                <p>SỐ LƯỢNG</p>
                                <div className={styles.payWrap}>
                                    <input type="number" min={1} max={10} />
                                    <button onClick={handleAddCart}>
                                        Thêm vào giỏ
                                    </button>
                                    <button>Mua ngay </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.productDetail}>
                    <h3>Mô tả</h3>
                    <div className={styles.productDetailWrap}>
                        <div className={styles.productDetails}>
                            <h2>Nguồn gốc</h2>
                            <p>{productChild.source}</p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>Số lượng</h2>
                            <p>{productChild.count}</p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>Tóm tắt</h2>
                            <p>
                                Táo có màu đỏ xen lẫn vàng. Quả nhỏ, cầm nặng
                                tay. Mặc dù không có hình thức đẹp như Envy hay
                                Rockit nhưng chất lượng rất ngon và giá thành
                                hợp lý, là lựa chọn hàng đầu cho các gia đình để
                                thưởng thức hàng ngày.
                            </p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>Vị</h2>
                            <p>giòn, ngọt thanh, cứng quả</p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>Dinh dưỡng</h2>
                            <p>
                                Một quả táo Fuji Nam Phi có thể cung cấp khoảng
                                4g chất xơ, 8mg vitamin C, 95 Kalo, magie, kẽm,
                                phốtpho và hàm lượng lớn các chất chống oxy.
                                Chúng giúp người sử dụng giảm nguy cơ béo phì,
                                tiểu đường, chống lại bệnh ung thư gan, ung thư
                                vú.. Táo được sử dụng để ăn ngay hoặc làm nước
                                ép uống buổi sáng rất tốt cho sức khoẻ
                            </p>
                        </div>
                        <div className={styles.productDetails}>
                            <h2>Bảo quản</h2>
                            <p>
                                Táo nên được bảo quản ở nhiệt độ mát trong tủ
                                lạnh từ 0 đến 4 độ C để táo luôn có độ giòn
                                ngọt. Sau khoảng 3 tháng, độ đường tăng cao, độ
                                PSI (độ xốp) sẽ cao hơn làm táo mất độ giòn.
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
                        Sản phẩm <strong>{productChild.name}</strong> đã được
                        thêm vào giỏ hàng
                    </Alert>
                </Stack>
            )}
        </div>
    );
};

export default Product;
