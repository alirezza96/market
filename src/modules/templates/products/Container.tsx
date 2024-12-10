import Card from "modules/components/card.product"
import { useQuery } from "react-query"
import getProducts from "services/axios/requests/products"
export default function Container() {
    const { data: products } = useQuery("products", () => getProducts())
    return (
        <div>
            Container
            {
                products?.map(product => {
                    const { id, title, image, price } = product
                    return (
                        <Card
                            image={image}
                            title={title}
                            price={price}
                            id={id}
                            key={id} />
                    )
                }
                )
            }

        </div>
    )
}