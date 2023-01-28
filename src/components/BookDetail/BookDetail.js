import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../../services/books";
import parse from "html-react-parser";
import Loading from "../Loading/Loading";
import { Col, Container, Row } from "react-bootstrap";


function BookDetail() {

    const { bookId } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const [loading, setLoading] = useState(false);

    const date = new Date(data.publishedDate);

    // const dateFormat = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' }).format(date);

    useEffect(() => {
        setLoading(true);
        getBookDetails(bookId)
            .then(response => {
                console.log(response.data.volumeInfo);
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
        <Container>
            <h4 className="text-center mb-5">{data.title}</h4>
            <Row className="mb-4 border-bottom">
                <Col lg={2} md={3} className="text-center">
                    <img src={data.imageLinks?.thumbnail} alt={data.title} />
                    <p className="mt-1">Rating: {data.averageRating}</p>
                    <p>({data.ratingsCount} ratings)</p>
                </Col>
                <Col>
                    <p className="text-primary">{data.authors}</p>
                    <p className="text-muted">{data.publisher}, {data.publishedDate} - {data.pageCount} pages</p>
                    <p>{parse('' + data.description)}</p>
                </Col>
            </Row>
            <h5>Info biblio</h5>
            <Row>
                <Col md={2}>Title</Col>
                <Col>{data.title}</Col>
            </Row>
            <Row>
                <Col md={2}>Author</Col>
                <Col>{data.authors}</Col>
            </Row>
            <Row>
                <Col md={2}>Editor</Col>
                <Col>{data.publisher}, {date.getFullYear()}</Col>
            </Row>
            <Row>
                <Col md={2}>ISBN</Col>
                <Col>{data.industryIdentifiers[0].identifier}</Col>
            </Row>
            <Row>
                <Col md={2}>Num. Pages</Col>
                <Col>{data.pageCount}</Col>
            </Row>
        </Container>
    )
}


export default BookDetail;