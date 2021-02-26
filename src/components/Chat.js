import React from 'react'
import styled from 'styled-components'
import ChatHeater from './ChatHeater'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <ChatContainer>

            <TopContainer>
                <ChatHeater/>
            </TopContainer>

            <MiddleContainer>
                <ChatMessage/>
            </MiddleContainer>

            <BottomContainer>
                <ChatInput/>
            </BottomContainer>

        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
display:grid;
grid-template-rows: 9.5% auto min-content;
`;
const TopContainer = styled.div`

`;
const MiddleContainer = styled.div`
    background:var(--slack-color-op);

`;
const BottomContainer = styled.div`

border-top:1px solid var(--slack-color-in);

`;