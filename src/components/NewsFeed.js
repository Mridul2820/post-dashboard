import React, { useState } from 'react'
import styled from 'styled-components'
import CardPost from './CardPost'
import ListPost from './ListPost'
import Pagination from './Pagination'
import DetailModal from './DetailModal'

const NewsFeed = ({ data, listView, cardView, setData }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalData, setModalData] = useState({})

    const [ currentPage, setCurrentPage ] = useState(1)
	const [ postsPerPage ] = useState(6)

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)


    // Delete
    const handleRemove = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    }

    return (
        <FeedContainer>
            <ListGrid listView={listView}>
            {listView && currentPosts.map(post => (
                <ListPost 
                    post={post} 
                    key={post.id} 
                    handleRemove={handleRemove} 
                    setModalOpen={setModalOpen} 
                    setModalData={setModalData}
                />
            ))}
            </ListGrid>

            <CardGrid cardView={cardView}>    
            {cardView && currentPosts.map(post => (
                <CardPost 
                    post={post} 
                    key={post.id} 
                    handleRemove={handleRemove} 
                    setModalOpen={setModalOpen} 
                    setModalData={setModalData}
                />
            ))}
            </CardGrid>

            <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
				postsPerPage={postsPerPage} 
				totalPosts={data.length} 
				paginate={paginate} 
			/>
            { modalOpen && 
                <DetailModal 
                    modalData={modalData} 
                    setModalOpen={setModalOpen} 
                />
            }
        </FeedContainer>
    )
}

const FeedContainer = styled.div`
    min-height: 100vh;
    padding: 30px 40px;
    margin: 0 auto;
`

const ListGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: ${({listView}) => listView ? '15px' : ''} ;
`

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: ${({cardView}) => cardView ? '20px' : ''} ;
`

export default NewsFeed
