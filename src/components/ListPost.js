import React from 'react'
import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc'

const ListPost = ({ post }) => {
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

    return (
        <PostContainer>
            <Post>
                <img 
                    src={post.image
                        ? post.image
                        : 'https://source.unsplash.com/random/40x40'
                    }
                    alt="post" 
                />
                <PostDetail>
                    <h2>{truncate(post.title, 60)}</h2>
                    <h3>{truncate(post.summary, 70)}</h3>
                    <p>{post.published}</p>
                </PostDetail>
            </Post>
            <Delete>
                <VscChromeClose size="28px" />
            </Delete>
        </PostContainer>
    )
}

const PostContainer = styled.div`
    display: flex;
    align-items: center;
`

const Post = styled.div`
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
    height: 110px;
    width: 650px;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background: #ffffff;

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 20px;
    }
`

const PostDetail = styled.div`
    h2 {
        font-size: 18px;
    }

    h3 {
        font-size: 16px;
    }
    p {
        font-size: 14px;
        color: #444;
    }
`

const Delete = styled.div`
    height: 50px;
    width: 50px;
    background: #ffffff;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    border-radius: 50%;
    cursor: pointer;

    svg {
        fill: red;
    }
    
`

export default ListPost
