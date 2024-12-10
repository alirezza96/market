import api from "services/axios/configs";
import { IProduct } from "types/product-types";

export default function getProducts () {
    const data: Promise<IProduct[]> = api.get('/products')
    return data
}

export const getOneProduct = (id: number) => {
    const data: Promise<IProduct[]> = api.get(`/products/${id}`)
    return data
}