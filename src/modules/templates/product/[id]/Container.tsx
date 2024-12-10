import { useQuery } from "react-query"
import { Navigate, useParams } from "react-router-dom"
import { getOneProduct } from "services/axios/requests/products"
import { IProduct } from "types/product-types"
export default function Container() {
    const params = useParams()
    const id = Number(params.id)
    // id not valid => navigate to "page not found"
    if (isNaN(id)) return Navigate({ to: "/notFound" })
    const { data }: { data: IProduct} = useQuery(["product", id], () => getOneProduct(id))
    return (
        <div>
            Container

            <div>
                <div>
                    <p>rate: {data.rating?.rate}</p>
                    <p>count: {data.rating?.count}</p>
                </div>
                <div>
                    <p>
                        category: {data.category}
                    </p>
                </div>
            </div>
            <div>
                <img src={data.image} width="400px" height="300px" />
            </div>
            <div>
                <p>title: {data.title}</p>
                <p>price: {data.price}</p>
                <p>description: {data.description}</p>

            </div>

        </div >
    )
}