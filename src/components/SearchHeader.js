import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function SearchHeader() {
    return (
        <MainContainerSearch>
            <AccessTimeIcon/>
            <SearchContainer>
             <Search>
              <input type="search" placeholder="Search"/>
             </Search>
            </SearchContainer>
            <HelpOutlineIcon/>
            
        </MainContainerSearch>
    )
}

export default SearchHeader

const MainContainerSearch = styled.div`
display:flex;
min-width:400px;
margin-left:16px;
margin-right:16px;
`;
const SearchContainer = styled.div`
margin-left:16px;
margin-right:16px;
box-shadow: inset 0 0 0 2px var(--slack-color-sidebar);
border-radius:6px;
    width:100%;
`;
const Search = styled.div`
>input{
background:transparent;
border:none;
padding-left: 8px;
padding-right:8px;
padding-top:4px;
padding-bottom:4px;
color:white;
outline:none;
    width:100%;
}
> ::-webkit-input-placeholder{
    color: var(--slack-color-in);
}
`;
