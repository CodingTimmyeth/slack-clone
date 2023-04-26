import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';



const Chat = () => {
    const roomId = useSelector(selectRoomId)
    const [roomDetails] = useCollection(
        roomId && db.collection('room').doc(roomId)
    )
    // const [roomMessages] = useCollection(
    //     roomId && db.collection('room').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    // )
    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#{roomDetails?.data().name}</strong>
                        </h4>
                        <StarIcon></StarIcon>
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoIcon></InfoIcon> Details
                        </p>
                    </HeaderRight>
                </Header>

                <ChatMessages>
                    {roomDetails?.docs.map(doc => {
                        const { message, timestamp, user } = doc.data();

                        return (
                            <Message
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                            />
                        )
                    })}
                </ChatMessages>

                <ChatInput
                    channelName={roomDetails?.data().name}
                    channelId={roomId}
                />
            </>
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
        > h4 {
            display: flex;
            text-transform: lowercase;
        }

        > h4 > .MuiSvgIcon-root {
            margin-left: 10px;
            font-size: 18px;
        }

`
const HeaderRight = styled.div`
    > p{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    > p > .MuiSvgIcon-root {
            margin-left: 10px;
            font-size: 18px;
        }
`

const ChatMessages = styled.div``
// const ChatInput = styled.div``
// const Message = styled.div``