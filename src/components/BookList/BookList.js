import { useState, useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
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

    const filterBooksWithImage = (books) => books ? books.filter(book => book.volumeInfo.hasOwnProperty('imageLinks')) : [];

    useEffect(() => {
        if (searchTerm) {
            getBookList(40, 'books', 'es', searchTerm)
                .then(response => {
                    // console.log(response.data)
                    const itemsToShow = filterBooksWithImage(response.data.items);
                    setData(itemsToShow);
                    setTotalItems(response.data.totalItems);
                })
                .catch(error => {
                    console.log(error);
                    setError(error)
                });
        }
    }, [searchTerm]);

    if (error) return `Error: ${error}`;

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
            <Row className="justify-content-center">
                {console.log(`Total items: ${totalItems}`)}
                {console.log(`Total show: ${data.length}`)}
                {
                    searchTerm && data.length > 0 ?
                        data.map((book, index) => {
                            return (
                                <BookCard
                                    key={index}
                                    title={book.volumeInfo.title}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    bookId={book.id}
                                />
                            )
                        })
                        :
                        <div>No data.</div>
                }
            </Row>
        </>
    )
}

export default BookList;