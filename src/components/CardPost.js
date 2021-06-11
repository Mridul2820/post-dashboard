import React from 'react'
import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc'

const CardPost = ({ post }) => {
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

    const handleRemove = (id) => {
        console.log(id);
    }

    return (
        <PostContainer>
            <Delete onClick={() => handleRemove(post.id)}>
                <VscChromeClose size="25px" />
            </Delete>
            <Post>
                <PostDetail>
                    <h2>{truncate(post.title, 35)}</h2>
                    <h3>{truncate(post.summary, 40)}</h3>
                    <p>{post.published}</p>
                </PostDetail>
                <img 
                    src={post.image
                        ? post.image
                        : 'https://source.unsplash.com/random/210x120'
                    }
                    alt="post" 
                />
            </Post>
        </PostContainer>
    )
}

const PostContainer = styled.div`
    position: relative;
    margin: 10px;
`

const Post = styled.div`
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
    height: 300px;
    width: 250px;
    padding: 30px 20px 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #ffffff;

    img {
        width: 210x;
        height: 120px;
    }
`

const PostDetail = styled.div`
    h2 {
        font-size: 18px;
        margin-bottom: 7px;
    }

    h3 {
        margin-bottom: 7px;
        font-size: 16px;
    }
    p {
        font-size: 14px;
        margin-bottom: 7px;
        color: #444;
    }
`

const Delete = styled.div`
    position: absolute;
    top: 7px;
    right: 7px;

    svg {
        fill: red;
    }
`

export default CardPost
