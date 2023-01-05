import {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ArticleList = () => {

    const [articles, setArticles] = useState([])
    

    const getAllArticles = async () => {
        try {
            const allArticlaes = await axios.get('http://localhost:4000/articles')
        setArticles(allArticlaes.data)
        } catch (error) {
            console.log(error)
        }
        
    };
    const deleteArticle =  (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "Yهل أنت متأكد من أنك تريد الحذف!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'نعم, احذفها!'
        }).then(async (result) => {
            try {
                if (result.isConfirmed) {
                const response = await axios.delete(`http://localhost:4000/articles/${ id }`)
                if (response.status === 200) {
                    setArticles(articles.filter(article => article.id !== id))
                        Swal.fire(
                            'Deleted!',
                            'تم حذف المقالة.',
                            'success'
                        )
                    }
                }
            } catch (error) {
                console.log(error)
            }
            
        })
            
            
        
    }
    useEffect(() => {
        getAllArticles()
    },[])

    return (
        <>
            <h1>Show All Articles</h1>
            <hr />
            {articles && articles.map(article => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <button onClick={() => deleteArticle(article.id)} className="btn btn-danger btn-sm">delete</button>
                    <hr />
                </div>
            ))}
        </>
        
    )
}

export default ArticleList