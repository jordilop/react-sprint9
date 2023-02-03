import axios from "axios";
import { useState, useEffect } from "react";
import { getBookDetails } from "../../services/books";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import Slide from "../../components/Slide/Slide";
import BookList from "../../components/BookList/BookList";
import { FaAward, FaBookOpen } from "react-icons/fa";
import jsonData from "../../assets/data/libros-mas-vendidos.json";
import "./index.css";


function Home() {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const date = new Date();

    useEffect(() => {
        setLoading(true);
        axios
            .all(jsonData.bestsellers.map(book => getBookDetails(book.bookId)))
            .then(axios.spread((...response) => {
                setData(response.map(element => element.data));
                setLoading(false);
            }))
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <Container fluid>
            <Row className="banner justify-content-center align-items-center text-white">
                <Col md={5} className="text-center">
                    <h4 className="mb-3">Proyecto IT Academy para buscar libros mediante la API Google Books</h4>
                    <Button variant="secondary" as={Link} to={process.env.PUBLIC_URL + '/books'}>Ir al buscador</Button>
                </Col>
            </Row>
            {
                !error ?
                    <Row className="justify-content-center my-3">
                        <h3 className="text-center text-uppercase my-1"><FaAward className="me-4" />Libros más vendidos {date.getFullYear()}</h3>
                        <Col md={9}>
                            <BookList data={data} loading={loading} />
                        </Col>
                    </Row>
                    :
                    <Row className="justify-content-center my-3">
                        {error}
                    </Row>
            }
            <Row className="justify-content-center my-3">
                <h3 className="text-center text-uppercase mt-1 mb-3"><FaBookOpen className="me-4" />Próximos eventos {date.getFullYear()}</h3>
                <Col md={6}>
                    <Slide data={jsonData.slider} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;