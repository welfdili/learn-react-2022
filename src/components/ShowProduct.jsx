import { useParams, useNavigate } from "react-router-dom"
const ShowProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    if (+id === 404) {
        return (
            <h1>Page Not Found</h1>
        )
    };
    const redirectionToHomePage = () => {
        navigate('/')
    }
    return (
        <>
            <h1>Show Product Here</h1>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti!</div>
        <button onClick={redirectionToHomePage} className="btn btn-success">Home Page</button>
        </>
    )
}

export default ShowProduct