import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getBookList } from "../../services/books";
import { Form, Row } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import Loading from "../Loading/Loading";

function BookList() {

    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const [searchParams, setSearchParams] = useSearchParams({ "q": '' });
    const minSearchTerm = 3;
    const [totalItems, setTotalItems] = useState(0);

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        value ? setSearchParams({ "q": value }) : setSearchParams('');
    }

    const filterBooksWithImage = (books) => books ? books.filter(book => book.volumeInfo.hasOwnProperty('imageLinks')) : [];

    useEffect(() => {
        setData([]);
        if (searchParams.get('q').length >= minSearchTerm) {
            setLoading(true);
            getBookList(40, 'books', 'es', searchParams.get('q'))
                .then(response => {
                    // console.log(response.data)
                    const itemsToShow = filterBooksWithImage(response.data.items);
                    setData(itemsToShow);
                    setTotalItems(response.data.totalItems);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setError(error);
                    setLoading(false);
                });
        }
    }, [searchParams]);

    if (error) return `Error: ${error}`;

    return (
        <>
            <Form onSubmit={e => e.preventDefault()}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Enter book title"
                        name="search"
                        onChange={handleChange}
                        value={searchParams.get('q') ? searchParams.get('q') : ''}
                    />
                    <Form.Text className="text-muted">
                        To display results, minimum length 3 characters.
                    </Form.Text>
                </Form.Group>
            </Form>
            <Row className="justify-content-center">
                {console.log(`Total items: ${totalItems}`)}
                {console.log(`Total show: ${data.length}`)}
                {loading && <Loading />}
                {
                    searchParams.get('q') && data.length > 0 ?
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