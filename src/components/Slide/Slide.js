import { Carousel, Container } from "react-bootstrap";
import testImage from "../../assets/img/slide.png"


function Slide() {

    const imgStyle = {
        maxHeight: '20rem'
    }

    const fakeData = [
        { title: 'First book', src: { testImage }, },
        { title: 'Second book', src: { testImage }, },
        { title: 'Third book', src: { testImage }, },
        { title: 'Fourth book', src: { testImage }, },
        { title: 'Fifth book', src: { testImage }, },
    ];

    return (
        <Container fluid className="p-0">
            <Carousel variant="dark">
                {
                    fakeData.map((book, item) => {
                        return (
                            <Carousel.Item key={item}>
                                <img
                                    className="d-block w-100" style={imgStyle}
                                    src={testImage}
                                    alt={book.title}
                                />
                                <Carousel.Caption>
                                    <h3>{book.title}</h3>
                                    <p>{book.title}</p>
                                </Carousel.Caption>
                            </Carousel.Item>)
                    })
                }
            </Carousel>
        </Container>
    )
}

export default Slide;