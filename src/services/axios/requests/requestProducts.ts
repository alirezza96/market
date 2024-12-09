import api from "services/axios/configs";

export const getProducts = () => {
    return api.get('/products')
}

