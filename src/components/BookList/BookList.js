import { useState, useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import Book from "../Book/Book";
import { getBookList } from "../../services/books";

function BookList() {

    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const [searchTerm, setSearchTerm] = useState('');
    const minSearchTerm = 3;
    const [totalItems, setTotalItems] = useState(0);

    const handleChange = (e) => {
        const length = e.target.value.length;
        length >= minSearchTerm ? setSearchTerm(e.target.value) : setSearchTerm('');
    }

    const filterBooksWithImage = (books) => books.filter(book => book.volumeInfo.hasOwnProperty('imageLinks'));


    useEffect(() => {
        if (searchTerm) {
            getBookList(40, 'books', 'es', searchTerm)
                .then(response => {
                    // console.log(response.data)
                    setData(response.data.items);
                    setTotalItems(response.data.totalItems);
                })
                .catch(error => setError(error));
        }
    }, [searchTerm]);

    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter book title" name="search" onChange={handleChange} />
                    <Form.Text className="text-muted">
                        To display results, minimum length 3 characters.
                    </Form.Text>
                </Form.Group>
            </Form>
            <Row>
                {console.log(`Total items: ${totalItems}`)}
                {console.log(`Total show: ${filterBooksWithImage(data).length}`)}
                {
                    searchTerm && totalItems > 0 ?
                        filterBooksWithImage(data).map((book, index) => <Book key={index} title={book.volumeInfo.title} image={book.volumeInfo.imageLinks.thumbnail} />)
                        :
                        <div>No data.</div>
                }
            </Row>
        </>
    )
}

export default BookList;