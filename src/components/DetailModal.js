import React from 'react'
import styled from 'styled-components'

const DetailModal = ({ modalData, setModalOpen }) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setModalOpen(null)
        }
    }

    console.log("modalData" ,modalData);

    return (
        <Container className="backdrop" onClick={handleClick} >
            <ModalMain>
                <h1>{modalData.title}</h1>
                <h2>{modalData.summary}</h2>
                <p>{modalData.published}</p>
            </ModalMain>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalMain = styled.div`
    background: #fff;
    width: 700px;
    height: 400px;
    border-radius: 10px;
`


export default DetailModal
