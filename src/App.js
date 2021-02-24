import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import MainHeader from './components/MainHeader';
import Login from './components/Login';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <AppContainer>
          <MainHeader/>
          <MainSection>
            <Sidebar/>
            <Switch>
              <Route path="/room">
                {/* Chat Page */}
                <Chat/>
              </Route>
              <Route path="/">
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