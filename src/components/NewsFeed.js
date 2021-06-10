import React from 'react'
import styled from 'styled-components'
import CardPost from './CardPost'
import ListPost from './ListPost'

const NewsFeed = ({ data, listView, cardView, }) => {
    return (
        <FeedContainer>
            <ListGrid>
            {listView && data.map(post => (
                <ListPost post={post} key={post.id} />
            ))}
            </ListGrid>

            <CardGrid>    
            {cardView && data.map(post => (
                <CardPost post={post} key={post.id}/>
            ))}
            </CardGrid>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export default NewsFeed
