import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getBookList } from "../../services/books";
import { Form, Row } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import Loading from "../Loading/Loading";

function BookList() {

    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [dataFilter, setDataFilter] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams({ "q": '' });
    const minSearchTerm = 3;


    const handleChange = (e) => {
        const { value } = e.target;
        value ? setSearchParams({ "q": value }) : setSearchParams('');
    }

    const filterData = (books) => books ? books.filter(book => book.volumeInfo.hasOwnProperty('imageLinks')) : [];

    const fetchData = () => {
        setLoading(true);
        getBookList(40, 'books', 'es', searchParams.get('q'))
            .then(response => {
                setData(response.data);
                setTotalItems(response.data.totalItems);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        setDataFilter(filterData(data.items));
    }, [data]);

    useEffect(() => {
        searchParams.get('q').length >= minSearchTerm ? fetchData() : setData([]);
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
                {console.log(`Total show: ${dataFilter.length}`)}
                {loading && <Loading />}
                {
                    // searchParams.get('q') && data.length > 0 ?
                    dataFilter.length > 0 ?
                        dataFilter.map((book, index) => {
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