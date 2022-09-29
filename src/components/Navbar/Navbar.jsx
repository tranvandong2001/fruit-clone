import styles from "./Navbar.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Avatar, Badge } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterProduct } from "../../redux/actions";
import CartProduct from "./CartProduct";
const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [cart, setCart] = useState(false);
    const [login, setLogin] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [menuItem, setMenuItem] = useState(false);
    const [menuItems, setMenuItems] = useState(false);

    const screenWidth = window.screen.width;

    const seachRef = useRef();
    const cartRef = useRef();
    const dispatch = useDispatch();

    const handleOpenMenu = () => {
        setOpenMenu((prev) => !prev);
    };

    const handleClickSearch = () => {
        setOpenSearch((prev) => !prev);
        seachRef.current.value = "";
        dispatch(filterProduct(""));
    };
    const handleCart = () => {
        setCart((prev) => !prev);
    };

    const handleLogin = () => {
        setLogin((prev) => !prev);
    };

    useEffect(() => {
        function handleWindow(e) {
            if (!seachRef.current.contains(e.target)) {
                setOpenSearch(false);
            }
            if (!cartRef.current.contains(e.target)) {
                setCart(false);
            }
        }
        document.addEventListener("mousedown", handleWindow);
        return () => {
            document.removeEventListener("mousedown", handleWindow);
        };
    }, []);

    const handleChangeProduct = (e) => {
        dispatch(filterProduct(e.target.value));
    };

    const local = JSON.parse(localStorage.getItem("cart")) || "[]";
    console.log("lấy ra từ localstorage", local);

    const totals = JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart")).reduce((acc, item) => {
              return (acc += +item.price);
          }, 0)
        : [];
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarWrap}>
                <div className={styles.navbarLeft}>
                    <ul className={styles.nav}>
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                            Danh mục sản phẩm <ExpandMoreIcon />
                            <ul className={styles.subNav}>
                                <li>
                                    <Link to="/">Tất cả</Link>
                                </li>
                                <li>
                                    HOT DEAL <KeyboardArrowRightIcon />
                                    <ul className={styles.subNavChild}>
                                        <li>
                                            <Link to="/">MUA LẺ</Link>
                                        </li>
                                        <li>
                                            <Link to="/">COMBO</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Quà tặng cao cấp <KeyboardArrowRightIcon />
                                    <ul className={styles.subNavChild}>
                                        <li>
                                            <Link to="/">
                                                GIỎ QUÀ TẶNG TRÁI CÂY
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">MUA NGUYÊN THÙNG</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Trái cây tươi
                                    <KeyboardArrowRightIcon />
                                    <ul className={styles.subNavChild}>
                                        <li>
                                            <Link to="/">Trái cây Nam Phi</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Trái cây Nhật</Link>
                                        </li>

                                        <li>
                                            <Link to="/">
                                                Trái cây Hàn Quốc
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/">Trái cây Úc</Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Trái cây New Zealand
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">Trái cây Mỹ</Link>
                                        </li>

                                        <li>
                                            <Link to="/">
                                                Trái cây các nước khác
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">Trái cây Ai Cập</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Đồ khô <KeyboardArrowRightIcon />
                                    <ul className={styles.subNavChild}>
                                        <li>
                                            <Link to="/">Đồ khô</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Thực Phẩm</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Giới thiệu</Link>
                        </li>
                        <li>
                            Danh mục tin tức <ExpandMoreIcon />
                            <ul className={styles.subNav}>
                                <li>
                                    <Link to="/">Tất cả</Link>
                                </li>
                                <li>
                                    <Link to="/">Tin khuyến mại</Link>
                                </li>
                                <li>
                                    <Link to="/">Tin thị trường</Link>
                                </li>
                                <li>
                                    <Link to="/">Kiến thức thưởng thức</Link>
                                </li>
                                <li>
                                    <Link to="/">Nghệ thuật tặng quà</Link>
                                </li>
                                <li>
                                    <Link to="/">Món ngon bổ dưỡng</Link>
                                </li>
                                <li>
                                    <Link to="/">Tin tức công ty</Link>
                                </li>
                            </ul>
                            <ul
                                className={styles.subNav}
                                style={{ display: "none" }}
                            >
                                <li>
                                    <Link to="/">Tất cả</Link>
                                </li>
                                <li>
                                    HOT DEAL <KeyboardArrowRightIcon />
                                </li>
                                <li>
                                    Quà tặng cao cấp <KeyboardArrowRightIcon />
                                </li>
                                <li>
                                    Trái cây tươi
                                    <KeyboardArrowRightIcon />
                                </li>
                                <li>
                                    Đồ khô <KeyboardArrowRightIcon />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Video</Link>
                        </li>
                        <li>
                            <Link to="/">Document</Link>
                        </li>
                        <li>
                            <Link to="/">Cửa hàng</Link>
                        </li>
                        <li>
                            <Link to="/">Liên hệ</Link>
                        </li>
                    </ul>
                    <div className={styles.mobileWrap}>
                        <MenuIcon
                            className={styles.menuIcon}
                            onClick={handleOpenMenu}
                        />

                        {openMenu && (
                            <ul className={styles.navMobile}>
                                <div className={styles.navMobileWrap}>
                                    <h3>Menu</h3>
                                    <CloseIcon
                                        className={styles.icon}
                                        onClick={() => setOpenMenu(false)}
                                    />
                                </div>
                                <li className={styles.navLinkMobile}>
                                    <Link to="/">Trang chủ</Link>
                                </li>
                                <li className={styles.linkWrap}>
                                    Danh mục sản phẩm
                                    {!menuItem && (
                                        <ExpandMoreIcon
                                            className={styles.icon}
                                            onClick={() =>
                                                setMenuItem((prev) => !prev)
                                            }
                                        />
                                    )}
                                    {menuItem && (
                                        <ExpandLessIcon
                                            className={styles.icon}
                                            onClick={() =>
                                                setMenuItem((prev) => !prev)
                                            }
                                        />
                                    )}
                                </li>
                                {menuItem && (
                                    <ul className={styles.navMobileChild}>
                                        <li className={styles.navMobileChilds}>
                                            <Link to="/">Tất Cả</Link>
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            HOT DEAL{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Quà tặng cao cấp{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Trái cây tươi{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Đồ khô{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                    </ul>
                                )}
                                <li className={styles.navLinkMobile}>
                                    <Link to="/">Giới thiệu</Link>
                                </li>
                                <li className={styles.linkWrap}>
                                    Danh mục tin tức{" "}
                                    {!menuItems && (
                                        <ExpandMoreIcon
                                            className={styles.icon}
                                            onClick={() =>
                                                setMenuItems((prev) => !prev)
                                            }
                                        />
                                    )}
                                    {menuItems && (
                                        <ExpandLessIcon
                                            className={styles.icon}
                                            onClick={() =>
                                                setMenuItems((prev) => !prev)
                                            }
                                        />
                                    )}
                                </li>
                                {menuItems && (
                                    <ul className={styles.navMobileChild}>
                                        <li className={styles.navMobileChilds}>
                                            <Link to="/">Tất Cả</Link>
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            HOT DEAL{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Quà tặng cao cấp{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Trái cây tươi{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Đồ khô{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                    </ul>
                                )}
                                <li className={styles.navLinkMobile}>
                                    <Link to="/">Video</Link>
                                </li>
                                <li className={styles.navLinkMobile}>
                                    <Link to="/">Document</Link>
                                </li>
                                <li className={styles.navLinkMobile}>
                                    <Link to="/">Cửa hàng</Link>
                                </li>
                                <li className={styles.navLinkMobile}>
                                    <Link to="/">Liên hệ</Link>
                                </li>
                            </ul>
                        )}
                        {openMenu && (
                            <div
                                className={styles.modal}
                                onClick={() => setOpenMenu(false)}
                            ></div>
                        )}
                    </div>
                </div>
                <div className={styles.navbarRight}>
                    <div className={styles.navbarAvatar}>
                        <Avatar onClick={handleLogin} />
                        {login && (
                            <Link
                                to="/account/login"
                                className={styles.navbarLogin}
                            >
                                Đăng nhập
                            </Link>
                        )}
                    </div>
                    <ul className={styles.navRight}>
                        <li ref={seachRef}>
                            {!openSearch && (
                                <SearchOutlinedIcon
                                    className={styles.searchIcon}
                                    onClick={handleClickSearch}
                                />
                            )}
                            {openSearch && (
                                <CloseOutlinedIcon
                                    onClick={handleClickSearch}
                                />
                            )}
                            {openSearch && (
                                <div className={styles.search}>
                                    <input
                                        type="text"
                                        placeholder="Tên sản phẩm"
                                        onChange={handleChangeProduct}
                                    />
                                    <CloseOutlinedIcon
                                        style={{ zIndex: "100" }}
                                        onClick={handleClickSearch}
                                    />
                                </div>
                            )}
                        </li>
                        <li ref={cartRef}>
                            <div className={styles.cart}>
                                <Badge
                                    badgeContent={local.length}
                                    color="primary"
                                >
                                    {/* <ShoppingCartOutlinedIcon
                                        onClick={handleCart}
                                    /> */}
                                    {screenWidth < 768 ? (
                                        <Link to="/shop/cart">
                                            <ShoppingCartOutlinedIcon
                                                onClick={handleCart}
                                            />
                                        </Link>
                                    ) : (
                                        <ShoppingCartOutlinedIcon
                                            onClick={handleCart}
                                        />
                                    )}
                                </Badge>
                            </div>
                            <ul className={styles.cartForm}>
                                {cart &&
                                    local &&
                                    local.map((product, index) => (
                                        <CartProduct
                                            key={product.id}
                                            index={index}
                                            productItem={product}
                                        />
                                    ))}
                                {cart && local.length > 0 && (
                                    <div className={styles.cartWrapper}>
                                        <div className={styles.pay}>
                                            <div className={styles.payWrap}>
                                                <span
                                                    className={styles.payMoney}
                                                >
                                                    Thành tiền
                                                </span>
                                                <span className={styles.money}>
                                                    {totals}.000đ
                                                </span>
                                            </div>
                                            <div className={styles.btn}>
                                                <Link to="shop/cart">
                                                    <button>Giỏ hàng</button>
                                                </Link>
                                                <button>Thanh toán</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </ul>
                            {cart
                                ? local.length === 0 && (
                                      <div className={styles.cartForm}>
                                          <div
                                              className={styles.cartItem}
                                              style={{ height: "100px" }}
                                          >
                                              <div
                                                  className={
                                                      styles.cartItemWrap
                                                  }
                                              >
                                                  <div
                                                      className={
                                                          styles.cartInfo
                                                      }
                                                      style={{
                                                          borderBottom: "none",
                                                      }}
                                                  >
                                                      <p
                                                          style={{
                                                              width: "100%",
                                                              textAlign:
                                                                  "center",
                                                          }}
                                                      >
                                                          Không có sản phẩm nào
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  )
                                : []}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
