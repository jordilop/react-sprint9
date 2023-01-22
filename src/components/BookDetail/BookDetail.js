import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../../services/books";
import parse from "html-react-parser";


function BookDetail() {

    const { bookId } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        getBookDetails(bookId)
            .then(response => {
                console.log(response.data.volumeInfo);
                setData(response.data.volumeInfo);
            })
            .catch(error => setError(error));
    }, [bookId]);

    if (error) return `Error: ${error}`;

    return (
        <div>
            <img src={data.imageLinks?.thumbnail} alt={data.title} />
            <h3>{data.title}</h3>
            <h4>Autor: {data.authors}</h4>
            <h4>Editorial: {data.publisher}</h4>
            <h5>Edición: {data.publishedDate}</h5>
            <p>{parse('' + data.description?.toString())}</p>
            <p>Categorias: {data.categories?.join(', ').toString() || "No data."}</p>
        </div>
    )
}

export default BookDetail;