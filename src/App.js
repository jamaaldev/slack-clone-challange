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
function App() {

const [rooms,setRooms] = useState([]);
const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));


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

  useEffect(() => {
  getChannels() 
  }, [])
console.log(rooms);

  return (
    <div className="App">
      <Router>
        {  
        !user ? 
        <Login setUser={setUser}/> :
      
        <AppContainer>
          <MainHeader signOut={signOut} user={user}/>
          <MainSection>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/room/:channelId">
                {/* Chat Page */}
                <Chat user={user} />
              </Route>
              <Route path="/DeleteChannelPage">
              {/* The Channel Has Been Deleted, */}
              <DeleteChannelPage/>
              </Route>
              <Route path="/Login">
                {/* Login Page */}
                <Login/>
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