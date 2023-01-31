import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getBookList } from "../../services/books";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Paginate from "../Paginate/Paginate";
import BookList from "../BookList/BookList";
import { FaSearch } from "react-icons/fa";

function BookSearch() {

    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [dataFilter, setDataFilter] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams({ q: '', page: '' });
    const minSearchTerm = 3;

    //paginate
    const [currentPage, setCurrentPage] = useState(searchParams.get("page") ? Number(searchParams.get("page")) : 1);
    const [maxResults] = useState(20);
    const [startIndex, setStartIndex] = useState(searchParams.get("page") ? maxResults * (currentPage - 1) : 0);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const prevPage = () => currentPage !== 1 ? setCurrentPage(currentPage - 1) : false;
    const nextPage = () => currentPage !== Math.ceil(totalItems / maxResults) ? setCurrentPage(currentPage + 1) : false;

    const handleChange = (e) => {
        const { value } = e.target;
        value ? setSearchParams({ q: value, page: currentPage }) : setSearchParams('');
        setStartIndex(0);
        setCurrentPage(1);
        setTotalItems(0);
    }

    const [select, setSelect] = useState('');

    const handleChangeSelect = e => {
        const { value } = e.target;
        // value === 'all' ? console.log('Aquí NADA') : console.log(`Aquí ${value}`);
        value === 'all' ? setSelect('') : setSelect(`${value}:`);
    }

    // const filterData = (books) => books ? books.filter(book => book.volumeInfo.hasOwnProperty('imageLinks')) : [];
    const filterData = (books) => books ? books : [];


    const fetchData = (startIndex) => {
        setLoading(true);
        getBookList(startIndex, maxResults, 'books', 'es', searchParams.get('q'), select)
            .then(response => {
                setData(response.data);
                !totalItems && setTotalItems(response.data.totalItems);
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
    }, [currentPage, maxResults]);

    useEffect(() => {
        setDataFilter(filterData(data.items));
    }, [data]);

    useEffect(() => {
        if (searchParams.get('q').length >= minSearchTerm) {
            fetchData(startIndex);
            setSearchParams({ q: searchParams.get("q"), page: currentPage });
        } else {
            setData([]);
        }
    }, [searchParams, startIndex]);

    if (error) return `Error: ${error}`;

    return (
        <>
            <Container className="my-3">
                <Row className="justify-content-center">
                    <Col md={9} className="text-center">
                        <Form className="my-2" onSubmit={e => e.preventDefault()}>
                            <Row>
                                <Col>
                                    <InputGroup>
                                        <InputGroup.Text id="btnSearch"><FaSearch /></InputGroup.Text>
                                        <Form.Control
                                            type="search"
                                            placeholder="Buscar"
                                            name="q"
                                            aria-label="Search"
                                            value={searchParams.get('q') ? searchParams.get('q') : ''}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col md={3} className="my-2 my-md-0">
                                    <Form.Select name="select" onChange={handleChangeSelect}>
                                        <option value="all">Todo</option>
                                        <option value="intitle">Título</option>
                                        <option value="author">Author</option>
                                        <option value="isbn">ISBN</option>
                                    </Form.Select>
                                </Col>
                                <Form.Text className="text-muted">
                                    Para buscar, mínimo 3 caracteres.
                                </Form.Text>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {
                dataFilter.length > 0 &&
                <Paginate
                    maxResults={maxResults}
                    totalItems={totalItems}
                    paginate={paginate}
                    currentPage={currentPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            }
            <BookList data={dataFilter} loading={loading} />
        </>
    )
}

export default BookSearch;