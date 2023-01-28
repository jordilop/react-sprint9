import { Container, Row } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import Loading from "../Loading/Loading";

function BookList({ data, loading }) {

    return (
        <Container>
            <Row className="justify-content-center">
                {
                    loading ?
                        <Loading />
                        :
                        data.length > 0 ?
                            data.map((book, index) => {
                                return (
                                    <BookCard
                                        key={index}
                                        title={book.volumeInfo.title}
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        bookId={book.id}
                                    />
                                )
                            })
                            :
                            <div>No data.</div>
                }
            </Row>
        </Container>

    )
}

export default BookList;