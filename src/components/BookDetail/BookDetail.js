import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../../services/books";
import parse from "html-react-parser";
import Loading from "../Loading/Loading";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaAmazon } from "react-icons/fa";

import defaultCover from "../../assets/img/default-cover.jpg";

function BookDetail() {

    const { bookId } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const [loading, setLoading] = useState(false);

    const date = new Date(data.publishedDate);

    useEffect(() => {
        setLoading(true);
        getBookDetails(bookId)
            .then(response => {
                // console.log(response.data.volumeInfo);
                setData(response.data.volumeInfo);
                setLoading(false);
            })
            .catch(error => {
                setError(error)
                setLoading(false);
            });
    }, [bookId]);

    if (error) return `Error: ${error}`;

    if (loading) return <Loading />

    return (
        <>
            <Container>
                <h4 className="text-center mb-5">{data.title}</h4>
                <Row className="mb-4 border-bottom">
                    <Col lg={2} md={3} className="text-center">
                        <img src={data.imageLinks ? data.imageLinks?.thumbnail : defaultCover} alt={data.title} className="img-fluid" />
                        <p className="mt-1 mb-0">Puntuación: {data.averageRating ? data.averageRating : "N/A"}</p>
                        <p>({data.ratingsCount ? data.ratingsCount : 0} reseñas)</p>
                    </Col>
                    <Col>
                        <p className="text-primary mb-1">{data.authors}</p>
                        <p className="text-muted">{data.publisher}, {date.getFullYear()} - {data.pageCount} pages</p>
                        <p>{parse('' + data.description)}</p>
                    </Col>
                </Row>
                <Row className="pb-4 border-bottom">
                    <h5>Información bibliográfica</h5>
                    <Row className="mb-2 mb-md-0">
                        <Col className="fst-italic" md={3} lg={2}>Título</Col>
                        <Col>{data.title}</Col>
                    </Row>
                    <Row className="mb-2 mb-md-0">
                        <Col className="fst-italic" md={3} lg={2}>Autor</Col>
                        <Col>{data.authors}</Col>
                    </Row>
                    <Row className="mb-2 mb-md-0">
                        <Col className="fst-italic" md={3} lg={2}>Editor</Col>
                        <Col>{data.publisher}, {date.getFullYear()}</Col>
                    </Row>
                    <Row className="mb-2 mb-md-0">
                        <Col className="fst-italic" md={3} lg={2}>ISBN</Col>
                        <Col>{data.industryIdentifiers?.map(isbn => isbn.identifier)?.join(', ')}</Col>
                    </Row>
                    <Row className="mb-2 mb-md-0">
                        <Col className="fst-italic" md={3} lg={2}>N.º de páginas</Col>
                        <Col>{data.pageCount}</Col>
                    </Row>
                </Row>
                <Row className=" justify-content-center">
                    <Col md={4} className="d-grid mx-auto my-4">
                        <Button variant="info" onClick={() => window.open(`https://www.amazon.es/dp/${data.industryIdentifiers[0]?.identifier}`)}>
                            <FaAmazon className="me-2" />
                            Comprar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default BookDetail;