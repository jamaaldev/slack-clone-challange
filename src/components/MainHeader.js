import React from 'react'
import styled from 'styled-components'
import SearchHeader from './SearchHeader';
import UserHeader from './UserHeader';

function MainHeader(props) {
    return (
        <MainContainerHeader>
            <SearchHeader/>
            <UserHeader signOut={props.signOut} user={props.user}/>
        </MainContainerHeader>
    )
}

export default MainHeader


const MainContainerHeader = styled.div`
background-color: var(--slack-color-header);
display:flex;
align-items:center;
justify-content:center;
position: relative;
color:white;
box-shadow: 0 2px 2px 0 #463b4766;


`;