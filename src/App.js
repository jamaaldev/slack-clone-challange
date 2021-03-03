import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import MainHeader from './components/MainHeader';
import Login from './components/Login';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import db from './firebase';
import { useEffect } from 'react';
import { useState } from 'react';
import {auth,provider} from './firebase';
import DeleteChannelPage from './components/DeleteChannelPage';
import RequestDelete from './components/RequestDelete';

function App() {
const [admin,setAdmin] = useState([]);
const [userInfo,setUserInfo] = useState([]);
const [rooms,setRooms] = useState([]);
const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
console.log('adminsnss',admin);
console.log('adminiIfno',userInfo,user);

const getChannels = () => {
  db.collection('rooms').onSnapshot(snapshot => {
    setRooms( snapshot.docs.map(channel => {
      return {id: channel.id, name: channel.data().name }
    }))
  });
}
const signOut = () =>{
  auth.signOut().then(()=>{
    localStorage.removeItem('user');
    setUser(null);
  })
}

const getData = () => {
  console.log('myget',admin);

  db.collection('users')
  .doc(admin).get().then(doc => {
    return  doc.data();
  }).then(datas =>{
      console.log('wowowo',datas);
      setUserInfo(datas)
  })
  
  
}

useEffect(() => {
  getChannels()
  }, [])

  return (
    <div className="App">
      <Router>
        {  
        !user ? 
        <Login   setAdmin={setAdmin} setUser={setUser}/> :
      
        <AppContainer>
          <MainHeader signOut={signOut} user={user}/>
          <MainSection>
            <Sidebar userInfo={userInfo}  admin={admin} rooms={rooms} user={user}/>
            <Switch>
              <Route path="/room/:channelId">
                {/* Chat Page */}
                <Chat user={user} />
              </Route>
              <Route path="/Login">
                {/* Login Page */}
                <Login  getData={getData} />
              </Route>
              <Route path="/RequestDelete">
              {/* Request Deleted, */}
                
               <RequestDelete admin={admin} />
              </Route>
              <Route path="/DeleteChannelPage">
              {/* The Channel Has Been Deleted, */}
              <DeleteChannelPage/>
              </Route>
              <Route path="/">
                Select Channel on The SideBar or Create New Channel +
              </Route>
            </Switch>
         </MainSection>
        </AppContainer>
        }
      </Router>
    </div>
  );
}

export default App;


const AppContainer = styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-rows: 38px minmax(0,1fr);
`;
const MainSection = styled.div`
display:grid;
grid-template-columns: 260px auto;

`;