import styled from 'styled-components'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsCardHeading } from 'react-icons/bs'

const Sidebar = ({ listView, setListView, cardView, setCardView, formActive, setFormActive}) => {

    const CardActive = () => {
        setListView(false)
        setCardView(true)
    }

    const ListActive = () => {
        setListView(true)
        setCardView(false)
    }
    
    return (
        <SidebarContainer>
            <Profile>
                <img src="https://source.unsplash.com/random/40x40" alt="user" />
                <div>
                    <h3>Hi Reader,</h3>
                    <p>Here's your News!</p>
                </div>
            </Profile>
            {!formActive && 
            <Toggle>
                <h2>View Toggle</h2>
                <ToggleIcon>
                    <Card
                        className="card"
                        onClick={CardActive}
                        cardView={cardView}
                    >
                        <BsCardHeading size="35px" />
                    </Card>
                    <List
                        className="list"
                        onClick={ListActive}
                        listView={listView}
                    >
                        <AiOutlineUnorderedList size="35px" />
                    </List>
                </ToggleIcon>
            </Toggle>
            }
            <Feedback>
                <h2>Have a Feedback?</h2>
                <Button onClick={() => setFormActive(!formActive)} formActive={formActive}>
                    We're Listening
                </Button>
            </Feedback>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 60px 45px;
    background-color: #EBF2F7;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
    border-radius: 20px;
`

const Profile = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
    background: #ffffff;

    img {
        border-radius: 50%;
        margin-right: 15px;
    }

    h3 {
        font-size: 17px;
    }

    p {
        font-size: 13px;
    }
`

const Toggle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
    background: #ffffff;

    h2 {
        font-size: 22px;
        margin-bottom: 10px;
    }
`

const ToggleIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
`

const Card = styled.div`
    background: ${({cardView}) => cardView ? '#96EBC7' : "#D3DAE3" } ;
    padding: 6px 20px ;
    cursor: pointer;

    svg {
        color: ${({cardView}) => cardView ? '#282929' : "#9C9C9C" };
    }
`

const List = styled.div`
    background: ${({listView}) => listView ? '#96EBC7' : "#D3DAE3" } ;
    padding: 6px 20px ;
    cursor: pointer;

    svg {
        color: ${({listView}) => listView ? '#282929' : "#9C9C9C" };
    }
`

const Feedback = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
    background: #ffffff;

    h2 {
        font-size: 20px;
        margin-bottom: 15px;
        white-space: nowrap;
    }
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: ${({formActive}) => formActive ? '#DAA4A1' : '#96EBC7'} ;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
`

export default Sidebar
