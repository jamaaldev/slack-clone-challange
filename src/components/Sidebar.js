import React from 'react'
import styled from 'styled-components'
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import AddIcon from '@material-ui/icons/Add';
import { SideBarItems } from './data/SidebarData';
import { ChannelBarItem } from './data/ChannelData';
import db from '../firebase';

function Sidebar({rooms}) {

const addChannel = () =>{
    const prompName = prompt('Enter New Channel Name');
    if(prompName){
        console.log(prompName);
       db.collection('rooms').add({
           name:prompName,
       })
    }
}

    return (
        <SidebarContainer>
          <WorkSpaceContainer>
            <Name>
                CleverProgrammer
            </Name>
            <NewMessage>
                <ControlPointIcon/>
            </NewMessage>
          </WorkSpaceContainer>
          <MainChannels>
             {
                 SideBarItems.map(item => (
                    <MainChannelItem>
                        {item.icon}
                        {item.text}
                    </MainChannelItem>
                 ))
             }
          </MainChannels>
          <ChannelsContainer>
             <NewChannelsContainer >
                <div >
                    Channels
                </div>
             <AddIcon onClick={addChannel}/>
             </NewChannelsContainer>
             <ChannelsList>
                {
                 rooms.map(item => (
                    <Channel>
                     # {item.name}
                     </Channel>
                    ))
                } 
             </ChannelsList>
          </ChannelsContainer>
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
background-color: var(--slack-color-sidebar);
color:white;

`;
const WorkSpaceContainer = styled.div`
display:flex;
align-items:center;
height:64px;
border-bottom: 1px solid rgb(104 74 104 / 28%);
width:100%;
`;
const Name = styled.div`
flex: 1;
margin-left:20px;
`;
const NewMessage = styled.div`
display:flex;
margin-right:20px;
> .MuiSvgIcon-root	{
    border-radius:50px;
    color:black;
    width:36px;
    height:36px;
    padding: 5px;
    background-color:white;
    cursor: pointer;

    :hover{
        opacity:0.8;
    }
}
`;

const MainChannels = styled.div`
padding-top:20px;

`;
const ChannelsContainer = styled.div`
padding-top:20px;

`;
const NewChannelsContainer = styled.div`
display:flex;
justify-content:space-between;
height:38px;
padding-left:22px;
align-items:center;
cursor: pointer;
:hover{
    background-color: var(--slack-color-header);
    opacity:0.8;

}
> .MuiSvgIcon-root{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:12px;

    :hover{
        background-color: var(--slack-color-sidebar);
        border-radius:35px;
        opacity:0.8;

    }
}
`;

const ChannelsList = styled.div`

`;

const Channel = styled.div`
display:flex;
align-items:center;
padding-left:22px;

cursor: pointer;
height:38px;

:hover{
    background-color: var(--slack-color-header);
    opacity:0.8;

}

> .MuiSvgIcon-root{
    padding-right:12px;
}
`;

const MainChannelItem = styled.div`
display:grid;
grid-template-columns:15% auto;
align-items:center;
padding-left:18px;
height:38px;
cursor: pointer;

:hover{
    background-color: var(--slack-color-header);
    opacity:0.8;

}
`;