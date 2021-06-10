import React from 'react'
import styled from 'styled-components'
import CardPost from './CardPost'
import ListPost from './ListPost'

const NewsFeed = ({ data, listView, cardView, }) => {
    return (
        <FeedContainer>
        {data.map(post => (
            <div key={post.id} >
                {listView && <ListPost post={post}/>}
                {cardView && <CardPost post={post}/>}
            </div>
        ))}
        </FeedContainer>
    )
}

const FeedContainer = styled.div`
    min-height: 100vh;
    padding: 50px 70px;
`

export default NewsFeed
