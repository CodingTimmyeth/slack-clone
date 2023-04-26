import React from 'react'
import styled from 'styled-components'

const Message = ({ message, timestamp, user }) => {
    return (
        <MessageContainer>
            <MessageInfo>
                <h4>
                    {user} (' ')
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div``
const MessageInfo = styled.div``