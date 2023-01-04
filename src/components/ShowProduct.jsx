import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

const ShowProduct = () => {

    const { products } = useContext(ProductContext)
    const { id } = useParams();
    const myproduct = products.find(product => product.id === +id)

    return (
        <>
            <div className="text-center">
                <h1 >{myproduct.label}</h1>
                <button className="btn btn-warning">{myproduct.price}</button>
            </div>
        </>
    )
}

export default ShowProduct