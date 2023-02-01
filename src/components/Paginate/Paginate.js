import { useState } from "react";
import { Pagination, Row } from "react-bootstrap";

function Paginate({ maxResults, totalItems, paginate, currentPage, prevPage, nextPage }) {

    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / maxResults);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const pageNumberLimit = 10;
    const [maxPageLimit, setMaxPageLimit] = useState(10);
    const [minPageLimit, setMinPageLimit] = useState(0);

    const createPaginationItem = (number) => {
        return <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => paginate(number)}
        >
            {number}
        </Pagination.Item>
    };

    const pagination = pageNumbers.map(number => (number <= maxPageLimit && number > minPageLimit) ? createPaginationItem(number) : null)

    const onPrevClick = () => {
        if (currentPage !== 1) {
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
            paginate(minPageLimit);
        }
    }

    const onNextClick = () => {
        setMaxPageLimit(maxPageLimit + pageNumberLimit);
        setMinPageLimit(minPageLimit + pageNumberLimit);
        paginate(maxPageLimit + 1);
    }

    const pageIncrementEllipses = pageNumbers.length > maxPageLimit ? <Pagination.Ellipsis onClick={onNextClick} /> : null;

    const pageDecremenEllipses = minPageLimit >= 1 ? <Pagination.Ellipsis onClick={onPrevClick} /> : null;

    if (totalPages < 2) return (<></>);

    return (
        <>
            <Row className="mb-4">
                <Pagination className="justify-content-center">
                    <Pagination.First onClick={() => paginate(1)} />
                    <Pagination.Prev onClick={currentPage === minPageLimit + 1 ? onPrevClick : prevPage} />
                    {pageDecremenEllipses}
                    {pagination}
                    {pageIncrementEllipses}
                    <Pagination.Next onClick={currentPage === maxPageLimit ? onNextClick : nextPage} />
                    <Pagination.Last onClick={() => paginate(totalPages)} />
                </Pagination>
            </Row>
        </>
    )
}

export default Paginate;