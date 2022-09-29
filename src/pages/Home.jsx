import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ListProduct from "../components/ListProduct/ListProduct";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Slide from "../components/Slide/Slide";

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Slide />
            <ListProduct />
            {/* <Product /> */}
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default Home;
