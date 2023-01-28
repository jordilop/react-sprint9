import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

function BookCard({ title, image, bookId }) {
    return (
        <Card border="0" className="text-center animate__animated animate__zoomIn mb-2 card-hover" style={{ width: '10rem' }}>
            <Link to={`${bookId}`}>
                <Card.Img src={image} title={title} />
            </Link>
        </Card>
    )
}

export default BookCard;