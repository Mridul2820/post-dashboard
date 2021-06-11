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
                <Img>
                    <img 
                        src={modalData.image
                            ? modalData.image
                            : 'https://source.unsplash.com/random/300x200'
                        }
                        alt="post" 
                    />
                </Img>
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
    padding: 15px 25px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 16px;
    }
    &::-webkit-scrollbar-thumb {
        background: #dadce0;
        background-clip: padding-box;
        border: 4px solid transparent;
        border-radius: 8px;
        box-shadow: none;
        min-height: 50px;
    }

    h1 {
        font-size: 22px;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 15px;
    }
`

const Img  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin: 20px auto;
    }
`


export default DetailModal
