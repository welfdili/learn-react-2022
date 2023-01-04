import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    // ------ Delete Product :
    const deleteProduct = (id) => {
        let resteProducts = products.filter(product =>
            product.id !== id
        )
        setProducts(resteProducts)
    }
    // ------ Add Product :
    const addProduct = (item) => {
        setProducts([item, ...products])
    }


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

    return (
        <ProductContext.Provider
            value={
                {
                    message: "salam les devs",
                    title: "Brigth Coding",
                    setProducts,
                    products,
                    deleteProduct,
                    addProduct
                }
            }>
            {children}
        </ProductContext.Provider>
    )
}