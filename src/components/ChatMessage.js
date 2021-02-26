import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

function ChatMessage() {
    return (
        <ChatContainer>
         <UserAvatar>
             <Avatar variant="rounded" className="Large" alt="Jamaal Hassan" src={process.env.PUBLIC_URL + '/jmk.jpg'} /> 
         </UserAvatar>
         <MessageContainer>
            <Name>
            Jamaal Mahamed
            <span>25/2/2021 2:27 PM</span>
            </Name>
            <Text>
                This is The Best Challenge
            </Text>
        </MessageContainer>
        </ChatContainer>
    )
}

export default ChatMessage

const ChatContainer = styled.div`
display:flex;
align-items:center;
padding:8px 20px;

:hover{
    background:var(--slack-color-op);
    
    
    
}

`;
const MessageContainer = styled.div`
display:flex;
flex-direction:column;
padding-left:10px;



`;

const UserAvatar = styled.div`
display:flex;

> .Large{
    width:55px;
    height:45px;
}

`;
const Name = styled.span`
  font-weight:900;
font-size:15px;
line-height:1.4;
>span{
    margin-left:10px;
    font-weight:400;
    color: var(--slack-color-sidebar);
    font-size:13px;

}
`;
const Text = styled.span`

`;