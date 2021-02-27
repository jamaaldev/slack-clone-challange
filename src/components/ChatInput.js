import React, { useState } from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import { InputBarItems } from './data/InputIcons';

function ChatInput({sendmessage}) {

const [input,setInput] = useState("");

const send = (e) =>{
e.preventDefault();
if(!input) return;
sendmessage(input);
setInput('');
}
    return (
        <InputContainer>
            <form action="">
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" name="" id="" placeholder="Message Here...."/>
                <SendButton type="submit" onClick={send}>
                <SendIcon/>
                </SendButton>
            </form>
            <IconContainer>
                {
                    InputBarItems.map(item => (
                        <inputIconContainer>
                         {item.icon}
                        </inputIconContainer>
                    ))
                }
            </IconContainer>
        </InputContainer>
    )
}

export default ChatInput

const InputContainer = styled.div`

border:1px solid var(--slack-color-sidebar);
border-radius:4px;
margin:15px;




:hover{
    background:var(--slack-color-op);
}

>form{
    display:flex;
    height:42px;
    align-items:center;
    padding-left:10px;
    > input {
        flex:1;
        border:none;
        font-size:18px;
        :focus{
            outline:none;
        }
        background-color:transparent;
        
    }
 
}



`;
const SendButton = styled.button`
display:flex;
border:none;
margin:5px;
border-radius:4px;
background-color: var(--slack-color-sidebar);
:hover{
background-color: var(--slack-color-header);
opacity:0.8;
cursor: pointer;

}
> .MuiSvgIcon-root	{
    color: var(--slack-color-in);
    width:40px;
    height:35px;
}

`;

const IconContainer = styled.div`
display:flex;
background-color: var(--slack-color-op);


> inputIconContainer{
    display:flex;
    align-items:center;
    padding:10px 10px;
    font-size:35px;
    :first-child{
        align-self:center;
            border-right: solid 1px grey;
            height:22px;
        }    
        
    > .MuiSvgIcon-root	{
        display:flex;
            width:25px;
            height:35px;
            color: var(--slack-color-sidebar);


 :hover{
     opacity:0.8;
 }
 
}
}
`;