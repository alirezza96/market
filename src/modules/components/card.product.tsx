import { Link } from "react-router-dom";
import { IProduct } from "types/product-types";

type ProductPreview = Pick<IProduct, "title" | "price" | "image" | "id">

export default function index({ title, price, image, id }: ProductPreview) {
    return (
        <div className="">
            <div>
                <img src={image} width="200px" height="200px" />
            </div>
            <div>
                <Link to={`/product/${id}`}>
                    title: {title}
                </Link>
                <p>
                    price: {price}
                </p>
            </div>
        </div>
    )
}