import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

function BookCard({ title, image, bookId }) {
    return (
        <Card style={{ width: '10rem' }} className="shadow border-0 text-center m-2 card-hover">
            <Card.Img variant="top" src={image} className="img-fluid w-100 mx-auto mt-4" />
            <Card.Body className="px-0">
                <Card.Text className="line-truncate" >
                    <small>{title}</small>
                </Card.Text>
            </Card.Body>
            <Link to={process.env.PUBLIC_URL + `/books/${bookId}`} className="stretched-link" title={title}></Link>
        </Card>
    )
}

export default BookCard;