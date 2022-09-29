import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./components/NotFound/NotFound";
import Product from "./components/Product/Product";
import store from "./redux/store";
import { Provider } from "react-redux";
import ShopCarts from "./pages/ShopCarts";
import LoginUser from "./pages/Login";
import CreateUser from "./pages/Create";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path="product" element={<Products />}>
                    <Route path=":productId" element={<Product />} />
                </Route>
                <Route path="shop/cart" element={<ShopCarts />} />
                <Route path="account/login" element={<LoginUser />} />
                <Route path="account/create" element={<CreateUser />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
