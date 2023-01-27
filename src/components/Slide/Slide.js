import { Carousel, Container } from "react-bootstrap";
import testImage from "../../assets/img/slide.png"


function Slide() {

    const imgStyle = {
        maxHeight: '20rem'
    }

    return (
        <Container fluid className="p-0">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={imgStyle}
                        src={testImage}
                        alt="..."
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50" style={imgStyle}
                        src={testImage}
                        alt="..."
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50" style={imgStyle}
                        src={testImage}
                        alt="..."
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Slide;