
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ProductContext } from "../Contexts/ProductContext";

const Product = ({children, id}) => {
    
    const {deleteProduct} = useContext(ProductContext)
    return (
        <>
            <div className="my-4">
                <div className="card text-white bg-primary mb-3" >
                {children}
                </div>
                <button onClick={()=> deleteProduct(id) } className="btn btn-danger">Delete</button>
        
            </div>
            </>
    )
};
Product.propTypes = {
    label: PropTypes.string,
    price: PropTypes.number.isRequired
}
Product.defaultProps = {
    label: "My Product",
    price: 0
}

export default Product