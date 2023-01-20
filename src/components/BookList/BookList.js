import { useState, useEffect } from "react";
import axios from "axios";

function BookList() {
    const url = 'https://www.googleapis.com/books/v1/volumes?langRestrict=es&q=';

    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const [searchTerm, setSearchTerm] = useState('');
    const minSearchTerm = 3;
    const [totalItems, setTotalItems] = useState(0);

    const handleChange = (e) => {
        const length = e.target.value.length;
        length >= minSearchTerm ? setSearchTerm(e.target.value) : setSearchTerm('');
    }

    useEffect(() => {
        if (searchTerm) {
            axios
                .get(url + searchTerm)
                .then(response => {
                    setData(response.data.items);
                    setTotalItems(response.data.totalItems);
                })
                .catch(error => setError(error));
        }
    }, [searchTerm]);

    return (
        <div>
            <input
                type="text"
                name="search"
                placeholder={`Book title, min length ${minSearchTerm}`}
                onChange={handleChange}
            />
            {
                searchTerm && totalItems > 0 ?
                    data.map(book => <div key={book.id}>{book.volumeInfo.title}</div>)
                    :
                    <div></div>
            }
        </div>
    )
}

export default BookList;