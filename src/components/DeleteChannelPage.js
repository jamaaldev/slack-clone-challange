import React from 'react'
import styled from 'styled-components'

function DeleteChannelPage() {
    return (
        <DeleleContainer>
            <TitleDeleteInfo>
            Your Channel Has Been Deleted Please Choose Other Channel on The Left SideBar,
            <UnderConstructor>
            Under Construction Style For This Page
            </UnderConstructor>

            </TitleDeleteInfo>

        </DeleleContainer>
    )
}

export default DeleteChannelPage


const DeleleContainer = styled.div`
background-color: var(--slack-color-in);

`;

const TitleDeleteInfo = styled.h2``;
const UnderConstructor = styled.h2``;