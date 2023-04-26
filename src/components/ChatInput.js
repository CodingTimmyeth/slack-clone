import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { db } from '../firebase'

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState('')
    const inputRef = useRef(null)

    const sendMessage = (e) => {

        e.preventDefault();

        if (!channelId) {
            return false;
        }
        db.collection('rooms').doc(channelId).collection("messages").add({
            message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Sonny',
        })
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={`Message #ROOM`} />
                <Button hidden type='submit'>SEND</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button {
        display: none !important;
    }
`