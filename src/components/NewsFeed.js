import React, { useState } from 'react'
import styled from 'styled-components'
import CardPost from './CardPost'
import ListPost from './ListPost'
import Pagination from './Pagination'

const NewsFeed = ({ data, listView, cardView, }) => {

    const [ currentPage, setCurrentPage ] = useState(1)
	const [ postsPerPage, setPostsPerPage ] = useState(6)

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <FeedContainer>
            <ListGrid>
            {listView && currentPosts.map(post => (
                <ListPost post={post} key={post.id} />
            ))}
            </ListGrid>

            <CardGrid>    
            {cardView && currentPosts.map(post => (
                <CardPost post={post} key={post.id}/>
            ))}
            </CardGrid>

            <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
				postsPerPage={postsPerPage} 
				totalPosts={data.length} 
				paginate={paginate} 
			/>
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
`

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export default NewsFeed
