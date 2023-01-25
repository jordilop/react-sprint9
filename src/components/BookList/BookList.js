import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getBookList } from "../../services/books";
import { Form, Row } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import Loading from "../Loading/Loading";
import Paginate from "../Paginate/Paginate";

function BookList() {

    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [dataFilter, setDataFilter] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams({ "q": '' });
    const minSearchTerm = 3;

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const [maxResults] = useState(40);
    const [startIndex, setStartIndex] = useState(0);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const prevPage = () => currentPage !== 1 ? setCurrentPage(currentPage - 1) : false;
    const nextPage = () => currentPage !== Math.ceil(totalItems / maxResults) ? setCurrentPage(currentPage + 1) : false;

    const handleChange = (e) => {
        const { value } = e.target;
        value ? setSearchParams({ "q": value }) : setSearchParams('');
        setStartIndex(0);
        setCurrentPage(1);
    }

    const filterData = (books) => books ? books.filter(book => book.volumeInfo.hasOwnProperty('imageLinks')) : [];

    const fetchData = (startIndex) => {
        setLoading(true);
        getBookList(startIndex, maxResults, 'books', 'es', searchParams.get('q'))
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
        setStartIndex(maxResults * (currentPage - 1));
    }, [currentPage]);

    useEffect(() => {
        setDataFilter(filterData(data.items));
    }, [data]);

    useEffect(() => {
        searchParams.get('q').length >= minSearchTerm ? fetchData(startIndex) : setData([]);
    }, [searchParams, startIndex]);

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

            {
                dataFilter.length > 0 && <Paginate
                    maxResults={maxResults}
                    totalItems={totalItems}
                    paginate={paginate}
                    currentPage={currentPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            }

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