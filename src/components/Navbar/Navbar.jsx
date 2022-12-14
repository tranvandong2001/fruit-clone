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
    console.log("l???y ra t??? localstorage", local);

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
                            <Link to="/">Trang ch???</Link>
                        </li>
                        <li>
                            Danh m???c s???n ph???m <ExpandMoreIcon />
                            <ul className={styles.subNav}>
                                <li>
                                    <Link to="/">T???t c???</Link>
                                </li>
                                <li>
                                    HOT DEAL <KeyboardArrowRightIcon />
                                    <ul className={styles.subNavChild}>
                                        <li>
                                            <Link to="/">MUA L???</Link>
                                        </li>
                                        <li>
                                            <Link to="/">COMBO</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Qu?? t???ng cao c???p <KeyboardArrowRightIcon />
                                    <ul className={styles.subNavChild}>
                                        <li>
                                            <Link to="/">
                                                GI??? QU?? T???NG TR??I C??Y
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">MUA NGUY??N TH??NG</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Tr??i c??y t????i
                                    <KeyboardArrowRightIcon />
                                    <ul className={styles.subNavChild}>
                                        <li>
                                            <Link to="/">Tr??i c??y Nam Phi</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Tr??i c??y Nh???t</Link>
                                        </li>

                                        <li>
                                            <Link to="/">
                                                Tr??i c??y H??n Qu???c
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/">Tr??i c??y ??c</Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Tr??i c??y New Zealand
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">Tr??i c??y M???</Link>
                                        </li>

                                        <li>
                                            <Link to="/">
                                                Tr??i c??y c??c n?????c kh??c
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">Tr??i c??y Ai C???p</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    ????? kh?? <KeyboardArrowRightIcon />
                                    <ul className={styles.subNavChild}>
                                        <li>
                                            <Link to="/">????? kh??</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Th???c Ph???m</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Gi???i thi???u</Link>
                        </li>
                        <li>
                            Danh m???c tin t???c <ExpandMoreIcon />
                            <ul className={styles.subNav}>
                                <li>
                                    <Link to="/">T???t c???</Link>
                                </li>
                                <li>
                                    <Link to="/">Tin khuy???n m???i</Link>
                                </li>
                                <li>
                                    <Link to="/">Tin th??? tr?????ng</Link>
                                </li>
                                <li>
                                    <Link to="/">Ki???n th???c th?????ng th???c</Link>
                                </li>
                                <li>
                                    <Link to="/">Ngh??? thu???t t???ng qu??</Link>
                                </li>
                                <li>
                                    <Link to="/">M??n ngon b??? d?????ng</Link>
                                </li>
                                <li>
                                    <Link to="/">Tin t???c c??ng ty</Link>
                                </li>
                            </ul>
                            <ul
                                className={styles.subNav}
                                style={{ display: "none" }}
                            >
                                <li>
                                    <Link to="/">T???t c???</Link>
                                </li>
                                <li>
                                    HOT DEAL <KeyboardArrowRightIcon />
                                </li>
                                <li>
                                    Qu?? t???ng cao c???p <KeyboardArrowRightIcon />
                                </li>
                                <li>
                                    Tr??i c??y t????i
                                    <KeyboardArrowRightIcon />
                                </li>
                                <li>
                                    ????? kh?? <KeyboardArrowRightIcon />
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
                            <Link to="/">C???a h??ng</Link>
                        </li>
                        <li>
                            <Link to="/">Li??n h???</Link>
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
                                    <Link to="/">Trang ch???</Link>
                                </li>
                                <li className={styles.linkWrap}>
                                    Danh m???c s???n ph???m
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
                                            <Link to="/">T???t C???</Link>
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            HOT DEAL{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Qu?? t???ng cao c???p{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Tr??i c??y t????i{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            ????? kh??{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                    </ul>
                                )}
                                <li className={styles.navLinkMobile}>
                                    <Link to="/">Gi???i thi???u</Link>
                                </li>
                                <li className={styles.linkWrap}>
                                    Danh m???c tin t???c{" "}
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
                                            <Link to="/">T???t C???</Link>
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            HOT DEAL{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Qu?? t???ng cao c???p{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            Tr??i c??y t????i{" "}
                                            <ExpandMoreIcon
                                                className={styles.icon}
                                            />
                                        </li>
                                        <li className={styles.navMobileChilds}>
                                            ????? kh??{" "}
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
                                    <Link to="/">C???a h??ng</Link>
                                </li>
                                <li className={styles.navLinkMobile}>
                                    <Link to="/">Li??n h???</Link>
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
                                ????ng nh???p
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
                                        placeholder="T??n s???n ph???m"
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
                                                    Th??nh ti???n
                                                </span>
                                                <span className={styles.money}>
                                                    {totals}.000??
                                                </span>
                                            </div>
                                            <div className={styles.btn}>
                                                <Link to="shop/cart">
                                                    <button>Gi??? h??ng</button>
                                                </Link>
                                                <button>Thanh to??n</button>
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
                                                          Kh??ng c?? s???n ph???m n??o
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
