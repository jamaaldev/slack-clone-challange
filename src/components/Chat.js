import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import ChatHeater from './ChatHeater'
import ChatInput from './ChatInput'
import UserMessage from './UserMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import  firebase from 'firebase';

function Chat({user}) {

    let {channelId} = useParams();
    const [channel,setChannel] = useState([]);
    const [messages,setMessages] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot((snapshot) => {
            let messages = snapshot.docs.map((doc)=> doc.data());
            setMessages(messages);
            
        })

    }

    const sendMessage = (text) =>{
        console.log(text);
        if(channelId){
            let payload = {
            text: text,
            timestamp: firebase.firestore.Timestamp.now(),
            user: user.name,
            userImage: user.photo,
            }
            db.collection("rooms").doc(channelId).collection("messages").add(payload);
        }

    }


    const getChannels = () =>{
        db.collection('rooms')
        .doc(channelId).onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })

    }

    useEffect(() => {
        getChannels();
        getMessages();

    }, [channelId])
    
    return (
        <ChatContainer>

            <TopContainer>
                <ChatHeater channelName={channel}/>
            </TopContainer>

            <MiddleContainer>
                {
                    messages.length > 0 &&
                    messages.map((data,index)=>(
                        <UserMessage 
                        text={data.text}
                        name={data.user}
                        image={data.userImage}
                        times={data.timestamp}
                        />

                    ))
                }
            </MiddleContainer>

            <BottomContainer>
                <ChatInput sendmessage={sendMessage}/>
            </BottomContainer>

        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
display:grid;
grid-template-rows: 9.5% auto min-content;
overflow: hidden;
`;
const TopContainer = styled.div`

`;
const MiddleContainer = styled.div`
overflow-y:scroll;
min-height:0;

background:var(--slack-color-op);

`;
const BottomContainer = styled.div`

border-top:1px solid var(--slack-color-in);

`;