import styles from "./Slide.module.css";
import Slider from "react-slick";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide3.png";
import Slide4 from "../../assets/slide4.jpg";
import Slide5 from "../../assets/slide5.jpg";
const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        infinite: true,
        autoplaySpeed: 3000,
        dotsClass: "slick-dots slick-thumb",
    };

    return (
        <div style={{ overflow: "hidden" }} className={styles.slickDots}>
            <Slider {...settings}>
                <div className={styles.imageWrap}>
                    <img src={Slide1} alt="" />
                </div>
                <div className={styles.imageWrap}>
                    <img src={Slide2} alt="" />
                </div>
                <div className={styles.imageWrap}>
                    <img src={Slide3} alt="" />
                </div>
                <div className={styles.imageWrap}>
                    <img src={Slide4} alt="" />
                </div>
                <div className={styles.imageWrap}>
                    <img src={Slide5} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Slide;
