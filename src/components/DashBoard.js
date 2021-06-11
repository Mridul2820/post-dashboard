import React, { useState } from 'react'
import styled from 'styled-components'
import NewsFeed from './NewsFeed'
import Sidebar from './Sidebar'
import FeedbackFrom from './FeedbackFrom'

const DashBoard = ({ data, setData }) => {
    const [listView, setListView] = useState(true)
    const [cardView, setCardView] = useState(false)

    const [formActive, setFormActive] = useState(false)

    return (
        <Container>
            <Sidebar 
                listView={listView}
                setListView={setListView}
                cardView={cardView}
                setCardView={setCardView}
                formActive={formActive}
                setFormActive={setFormActive}
            />
            <NewsFeed 
                listView={listView}
                cardView={cardView}
                data={data} 
                setData={setData}
            />
            {formActive && <FeedbackFrom setFormActive={setFormActive} />}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

export default DashBoard
