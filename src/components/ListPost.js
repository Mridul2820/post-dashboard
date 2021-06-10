import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc'

const ListPost = ({ post }) => {

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

    const handleRemove = (id) => {
        console.log(id);
    }

    return (
        <PostContainer>
            <Post>
                <img 
                    src={post.image
                        ? post.image
                        : 'https://source.unsplash.com/random/42x42'
                    }
                    alt="post" 
                />
                <PostDetail>
                    <h2>{truncate(post.title, 50)}</h2>
                    <h3>{truncate(post.summary, 60)}</h3>
                    <p>{post.published}</p>
                </PostDetail>
            </Post>
            <Delete onClick={() => handleRemove(post.id)}>
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
    width: 750px;
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
    height: 45px;
    width: 45px;
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
