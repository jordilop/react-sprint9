import { Card } from "react-bootstrap";

function Book({ title, image }) {
    return (
        <Card border="white" className="text-center animate__animated animate__zoomIn mb-2" style={{ width: '8rem' }}>
            <Card.Img src={image} title={title} />
        </Card>
    )
}

export default Book;