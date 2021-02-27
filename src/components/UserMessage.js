import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

function UserMessage({text,name,image,times}) {
    return (
        <ChatContainer>
         <UserAvatar>
             <Avatar variant="rounded" className="Large" alt={name} src={process.env.PUBLIC_URL + image} /> 
         </UserAvatar>
         <MessageContainer>
            <Name>
            {name}
            <span>{new Date(times.toDate()).toUTCString()}</span>
            </Name>
            <Text>
                {text}
            </Text>
        </MessageContainer>
        </ChatContainer>
    )
}

export default UserMessage

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