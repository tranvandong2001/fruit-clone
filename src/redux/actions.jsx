export const filterProduct = (payload) => {
    return {
        type: "FILTER_PRODUCT",
        payload: payload,
    };
};
export const addCart = (payload) => {
    return {
        type: "ADD_PRODUCT",
        payload: payload,
    };
};
export const removeCart = (payload) => {
    return {
        type: "REMOVE_PRODUCT",
        payload: payload,
    };
};
