import { fruitData } from "../components/data/FruitData";

const initialState = {
    filter: {
        text: "",
    },
    productCart: {
        product: fruitData,
        cart: localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : localStorage.setItem("cart", JSON.stringify([])),
    },
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_PRODUCT":
            const productFind = fruitData.filter(
                (product) =>
                    product.name
                        .toLowerCase()
                        .indexOf(action.payload.toLowerCase()) !== -1
            );
            return {
                ...state,
                productCart: {
                    ...state.productCart,
                    product: productFind,
                },
            };
        case "ADD_PRODUCT":
            break;

        case "REMOVE_PRODUCT":
            const index = action.payload;
            console.log("index", index);
            const getLocalstorage = localStorage.getItem("cart");
            const listArr = JSON.parse(getLocalstorage);
            listArr.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(listArr));
            return { ...state };

        default:
            return state;
    }
};

export default rootReducer;
