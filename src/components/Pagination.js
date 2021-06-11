import styled from "styled-components"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Pagination = ({ currentPage, setCurrentPage, postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = []

    const totalPages =  Math.ceil(totalPosts / postsPerPage)

    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const handleNextbtn  = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevbtn  = () => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <Container>
            <ul>
                {currentPage > 1 && 
                    <li onClick={handlePrevbtn}>
                        <AiOutlineLeft />
                    </li>
                }
                {pageNumbers.map(number => (
                    <li 
                        key={number} 
                        onClick={() => paginate(number)}
                        className={currentPage == number ? "active" : null}
                    >
                        {number}
                    </li>
                ))}
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
