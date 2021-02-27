import React from 'react'
import styled from 'styled-components';
import {auth,provider} from '../firebase'
function Login(props) {

    const SignIn = () => {
        auth.signInWithPopup(provider).then((result)=>{
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));

           props.setUser(newUser);
        }).catch((error) => {
            console.log('error login',error);
            alert(error);
        })
    }

    return (
        <LoginContainer>
            <Content>
                <SlackImg src='http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png' />
                <Name>
                    Sign in Slack Clone Challenge
                </Name>
                <SignInButton onClick={()=>SignIn()}>
                    Sign in With Google
                </SignInButton>
            </Content>
        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
display: flex;
align-items:center;
justify-content:center;
background-color:var(--slack-color-op);
height:100vh;
`;
const Content = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:200px 120px;
background-color:white;
border-radius:15px;
box-shadow: 0px 0px 2px 2px rgb(18 39 60 / 5%);

`;

const SlackImg = styled.img`
display:flex;
height:200px;
`;

const Name = styled.h1`

`;

const SignInButton = styled.button`
background-color:green;
color:white;
border:none;
height:50px;
border-radius:5px;
margin-top:55px;
padding:10px 30px;
font-size:18px;
:hover{
    background-color:darkgreen;
    cursor: pointer;

}

`;