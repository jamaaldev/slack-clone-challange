import React from 'react'
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';


function UserHeader(props) {
    console.log(props);
    return (
        <UserContainer>
            <Name>
                {props.user.name}
            </Name>

            <UserImage >
              <Avatar  className="img" alt={props.user.name} src={process.env.PUBLIC_URL + props.user.photo} /> 
              <SignOut onClick={props.signOut}>

                SignOut
              </SignOut>
            </UserImage>
        </UserContainer>
    )
}

export default UserHeader

const UserContainer = styled.div`
display:flex;
align-items:center;
padding-right:16px;
position:absolute;
right:0;
`;
const Name = styled.div`
padding-right:16px;

`;
const UserImage = styled.div`
display:flex;
align-items:center;

> .img{
    color:blue;
    width:28px;
    height:28px;
    border: 2px solid white;
    cursor: pointer;
:hover{
    background-color: var(--slack-color-secondry);
    opacity:0.8;

}
}
 
`;
const SignOut = styled.div`
margin-right:5px;
margin-left:5px;
font-weight:500;
padding:3px;
cursor: pointer;
:hover{
    background-color: var(--slack-color-sidebar);
    border-radius:4px;
}


`;