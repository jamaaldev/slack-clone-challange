import React from 'react'
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';


function UserHeader() {
    return (
        <UserContainer>
            <Name>
                Jamaal
            </Name>
            <UserImage>
              <Avatar className="img" alt="Jamaal Hassan" src="/static/images/avatar/1.jpg" /> 
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


> .img{
    color:blue;
    width:28px;
    height:28px;
    border: 2px solid white;
    cursor: pointer;
}
:hover{
    background-color: var(--slack-color-secondry);
    opacity:0.8;

}
 
`;
