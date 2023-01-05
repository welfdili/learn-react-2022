import Counter from "./Counter";
import Product from "./Product";
import { useState, useContext, useRef } from "react";
import { useNavigate} from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { ProductContext } from "../Contexts/ProductContext";


function Products() {

    const { products, addProduct} = useContext(ProductContext)
    const Navigete = useNavigate();

    const showProduct = (id) => {
        Navigete(`/product/${id}`)
    }
    
    let showList = true;
    const title = useRef("");
    const price = useRef(0)
    const [message, setMessage] = useState("")
    
    
    const titleInput = (e) => {
        if (e.target.value === "") {
            setMessage("title is required")
        } else if (e.target.value.length < 3) {
            setMessage("title must be more than 3 characters")
        } else {
            setMessage("")
            
        }
    };
    const priceInput = (e) => {
        
    };
    const submitForm = (e) => {
        e.preventDefault()
        let newProduct = {
            id: uuid(),
            label: title.current.value,
            price: price.current.value
        }
        addProduct(newProduct);

        
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="col">
                        <div className="form-group my-2">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input id="title" ref={title} onChange={titleInput} type="text" className="form-control" />
                        {message && (
                            <div className="alert alert-warning">{message}</div>
                        )}
                    </div>
                </div>
                    <div className="col">  
                        <div className="form-group my-2">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input id="price" ref={price} onChange={priceInput} type="number" className="form-control" />
                    </div>

                </div>
                </div>
                
                
                <button  className="btn btn-warning my-2 mb-2">Save</button>
            </form>
            

            <Counter />

            {showList && (
                <div>
                    {products.map((product, index) => (
                        <div key={index}>
                            <Product id={product.id}>
                                <div className="card-body">
                                    <h4 className="card-title">{product.label}</h4>
                                    <p className="card-text">
                                        <button className="btn btn-success">
                                            {product.price}
                                        </button>
                                        <button onClick={()=>showProduct(product.id)} className="btn btn-warning mx-4">Show Product</button>
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