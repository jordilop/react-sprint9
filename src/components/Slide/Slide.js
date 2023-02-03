import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Overlay } from "./StyledSlide";

function Slide({ data }) {

    const imgStyle = {
        height: '30rem',
        objectFit: 'cover'
    }

    return (
        <Container fluid className="p-0">
            <Carousel>
                {
                    data.map((book, item) => {
                        return (
                            <Carousel.Item key={item}>
                                <img
                                    className="d-block w-100" style={imgStyle}
                                    src={book.img}
                                    alt={book.title}
                                />
                                <Overlay />
                                <Carousel.Caption>
                                    <h3>
                                        <Link
                                            className="text-white"
                                            onClick={() => window.open(book.url)}
                                        >
                                            {book.title}
                                        </Link>
                                    </h3>
                                    <p>{book.data}</p>
                                </Carousel.Caption>
                            </Carousel.Item>)
                    })
                }
            </Carousel>
        </Container>
    )
}

export default Slide;