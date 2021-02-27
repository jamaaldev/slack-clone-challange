import React from 'react'
import styled from 'styled-components'
import Star from '@material-ui/icons/Star';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function ChatHeater({channelName}) {
    return (
        <ChatHeaterContainer>
            <TopHeader>
                <ChannelNameTop>
                 # { channelName && channelName.name}
                 <Star/>
                </ChannelNameTop>
                <ChannelDetailTop>
                    Details
                    <InfoOutlinedIcon/>
                </ChannelDetailTop>
            </TopHeader>
            <BottomHeader>
                <BottomDetail>
                    Company-Wide-Announcements and Work-Based Matters
                </BottomDetail>
            </BottomHeader>
        </ChatHeaterContainer>
    )
}

export default ChatHeater


const ChatHeaterContainer = styled.div`
display:grid;
grid-template-rows: 50px auto;
border-bottom: 1px solid var(--slack-color-in);
padding-left:32px;
padding-right:32px;

`;
const TopHeader = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;
const ChannelNameTop = styled.div`
display:flex;
align-items:center;
font-weight:600;
> .MuiSvgIcon-root	{
   color:var(--slack-color-header);
   font-size:18px;
   padding-left:8px;
}
`;
const ChannelDetailTop = styled.div`
display:flex;
align-items:center;
font-weight:400;
> .MuiSvgIcon-root	{
    padding-left:8px;
    cursor: pointer;
    :hover{
       color: var(--slack-color-header);
       opacity:0.8;
   }
}
`;
const BottomHeader = styled.div`
padding-top:8px;
padding-bottom:8px;
color:#3c3838;
`;
const BottomDetail = styled.div`

`;