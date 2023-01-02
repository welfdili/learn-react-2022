
import PropTypes from 'prop-types';

const Product = ({children, onDeleteProduct, id}) => {
    
    return (
        <>
            <div className="my-4">
                <div className="card text-white bg-primary mb-3" >
                {children}
                </div>
                <button onClick={()=>{onDeleteProduct(id)}} className="btn btn-danger">Delete</button>
        
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