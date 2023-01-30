import { Container } from "react-bootstrap";
import errorImage from "../../assets/img/404-page.jpg"


function Error() {
    return (
        <Container fluid>
            <img src={errorImage} alt="404 page error" className="img-fluid" />
        </Container>
    )
}

export default Error;