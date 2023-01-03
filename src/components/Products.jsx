import Counter from "./Counter";
import Product from "./Product";
import { useState } from "react";
import { v4 as uuid } from 'uuid'

function Products() {

    
    let showList = true;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [message, setMessage] = useState("")
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
    };
    const titleInput = (e) => {
        if (e.target.value === "") {
            setMessage("title is required")
        } else if (e.target.value.length < 3) {
            setMessage("title must be more than 3 characters")
        } else {
            setMessage("")
            setTitle(e.target.value)
        }
    };
    const priceInput = (e) => {
        setPrice(e.target.value)
    };
    const submitForm = (e) => {
        e.preventDefault()
        let newProduct = {
            id: uuid(),
            label: title,
            price
        }
        setProducts([newProduct, ...products]);

        setTitle("");
        setPrice(0)
    }
    return (
        <>
            <h1>Learn how to create apps with react 2022</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione et iusto qui suscipit in saepe autem ipsam omnis fugiat dolorum quos mollitia, eos quas corporis doloribus beatae eligendi excepturi.</p>
            
            <form onSubmit={submitForm}>
                <div className="form-group my-2">
                    <label htmlFor="" className="form-label">Title</label>
                    <input defaultValue={title} onChange={titleInput} type="text" className="form-control" />
                    {message && (
                        <div className="alert alert-warning">{message}</div>
                    )}
                </div>
                <div className="form-group my-2">
                    <label htmlFor="" className="form-label">Price</label>
                    <input value={price} onChange={priceInput} type="number" className="form-control" />
                </div>
                <button  className="btn btn-warning my-2 mb-4">Save</button>
            </form>
            

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