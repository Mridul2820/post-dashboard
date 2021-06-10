import React from 'react'
import styled from 'styled-components'

const CardPost = ({ post }) => {
    return (
        <Post>
            <img src={post.image} alt="" />
            <PostDetail>
                <h3>{post.title}</h3>
            </PostDetail>
        </Post>
    )
}

const Post = styled.div`

`

const PostDetail = styled.div`

`

export default CardPost
