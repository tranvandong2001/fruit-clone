import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import ShopCart from "../components/ShopCart/ShopCart";

const ShopCarts = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <ShopCart />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default ShopCarts;
