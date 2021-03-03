import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import db from '../firebase';

function RequestDelete({admin}) {

const addMe = () => {


        db.collection('users').doc(admin).set({
            admin:false,
            userLevel:0,
            bio: "waaakaa"
       })
    }
    const setMeAdmin =()=>{
        // Add a new document in collection "cities"
db.collection("users").doc(admin).update({
    admin: true,
    
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

    }


    return (
        <div>
            delete
            <ButtonClick onClick={() => addMe()}>Add User Extra Feild</ButtonClick>
            <ButtonClick onClick={() => setMeAdmin()}>Add admin</ButtonClick>
        </div>
    )
}

export default RequestDelete

const ButtonClick = styled.button``;