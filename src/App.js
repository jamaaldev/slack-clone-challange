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

function App() {

const [rooms,setRooms] = useState([]);


  const getChannels = () => {
     db.collection('rooms').onSnapshot(snapshot => {
      setRooms( snapshot.docs.map(channel => {
          return {id: channel.id, name: channel.data().name }
       }))
    });
  }

  useEffect(() => {
  getChannels()    
  }, [])
console.log(rooms);

  return (
    <div className="App">
      <Router>
        <AppContainer>
          <MainHeader/>
          <MainSection>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/">
                {/* Chat Page */}
                <Chat/>
              </Route>
              <Route path="/login">
                {/* Login Page */}
                <Login/>
              </Route>
            </Switch>
         </MainSection>
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;


const AppContainer = styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-rows: 38px auto;
`;
const MainSection = styled.div`
display:grid;
grid-template-columns: 260px auto;

`;