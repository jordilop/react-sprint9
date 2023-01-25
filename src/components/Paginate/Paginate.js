import { Col, ListGroup, Row } from "react-bootstrap";

function Paginate({ maxResults, totalItems, paginate, currentPage, prevPage, nextPage }) {

    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / maxResults);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    if (totalPages < 2) return (<></>);

    return (
        <Row className="mb-4 justify-content-center text-center">
            <Col md={8}>
                <ListGroup horizontal >
                    <ListGroup.Item action onClick={prevPage}>Prev</ListGroup.Item>

                    {
                        pageNumbers.map(number => {
                            return (<ListGroup.Item
                                action
                                key={number}
                                className={number === currentPage ? "active" : ""}
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </ListGroup.Item>)
                        })
                    }

                    <ListGroup.Item action onClick={nextPage}>Next</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    )
}

export default Paginate;