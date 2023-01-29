import { Container, Row } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import Loading from "../Loading/Loading";

import defaultCover from "../../assets/img/default-cover.jpg"

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
                                        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : defaultCover}
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