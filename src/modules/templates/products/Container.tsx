import Card from "modules/components/card.product"
import { useEffect } from "react"
import { useQuery } from "react-query"
import api from "services/axios/configs"
export default function Container() {
    const { data: products } = useQuery("products", () => api("/products").then(res => res))
    // useEffect(() => {
    //     api("/products").then(res => console.log("res =>", res))
    // }, [])
    // console.log("products =>", products)
    return (
        <div>
            Container
            {
                products?.map(product => <Card key={product.id} />)
            }

        </div>
    )
}