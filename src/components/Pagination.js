import styled from "styled-components"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useState } from "react";

const Pagination = ({ currentPage, setCurrentPage, postsPerPage, totalPosts, paginate }) => {

    const [pageNumberLimit] = useState(3);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const pageNumbers = []

    const totalPages =  Math.ceil(totalPosts / postsPerPage)

    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const handleNextbtn  = () => {
        setCurrentPage(currentPage + 1)

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrevbtn  = () => {
        setCurrentPage(currentPage - 1)

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    return (
        <Container>
            <ul>
                {currentPage > 1 && 
                    <li onClick={handlePrevbtn}>
                        <AiOutlineLeft />
                    </li>
                }
                {pageNumbers.map(number => {
                    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
                        return (
                        <li
                            key={number}
                            onClick={() => paginate(number)}
                            className={currentPage === number ? "active" : null}
                        >
                            {number}
                        </li>
                        );
                    } else {
                        return null;
                    }
                })}
                {currentPage < totalPages && 
                    <li onClick={handleNextbtn}>
                        <AiOutlineRight />
                    </li>
                }
            </ul>
        </Container>
    )
}


const Container  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        list-style: none;

        li {
            padding: 5px;
            margin: 5px;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background: #ddd;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);

            &.active {
                background: #ffffff;
            }
        }
    }
`

export default Pagination
