import Counter from "./Counter";
import Product from "./Product";
import { useState } from "react";

function Products() {

    let title = "Learn how to create apps with react 2022";
    let showList = true;
    const [products, setProducts] = useState([
        {
            id: 1,
            label: "Iphone 13",
            price: 1250
        },
        {
            id: 2,
            label: "Sumsung",
            price: 1050
        },
        {
            id: 3,
            label: "Vivo",
            price: 850
        }
    ]);
    const deleteProduct = (id) => {
        let resteProducts = products.filter(product =>
            product.id !== id
            )
        setProducts((prev) => { 
            return resteProducts
        })
    }
    return (
        <>
            <h1>{ title }</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione et iusto qui suscipit in saepe autem ipsam omnis fugiat dolorum quos mollitia, eos quas corporis doloribus beatae eligendi excepturi.</p>
            
            <Counter />

            {showList && (
                <div>
                    {products.map((product, index) => (
                        <div key={index}>
                            <Product id={product.id}  onDeleteProduct={deleteProduct}>
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit.</p>
                                    <h4 className="card-title">{product.label}</h4>
                                    <p className="card-text">
                                        <button className="btn btn-success">
                                            {product.price}
                                        </button>
                                    </p>
                                </div>
                            </Product>
                            
                        </div>
                    ))}
                </div>
            )}
            
        </>
    )
}

export default Products