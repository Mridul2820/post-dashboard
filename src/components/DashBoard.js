import React, { useState } from 'react'
import styled from 'styled-components'
import NewsFeed from './NewsFeed'
import Sidebar from './Sidebar'

const DashBoard = ({ data, setData }) => {
    const [listView, setListView] = useState(true)
    const [cardView, setCardView] = useState(false)

    return (
        <Container>
            <Sidebar 
                listView={listView}
                setListView={setListView}
                cardView={cardView}
                setCardView={setCardView}
            />
            <NewsFeed 
                listView={listView}
                cardView={cardView}
                data={data} 
                setData={setData}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

export default DashBoard
