import React from "react";
import ChatMessage from "./ChatMessage.js";
import styled from 'styled-components';
import uuid from 'react-uuid';
import CurrentChatUser from "./CurrentChatUser.js";
import Input from "./Input.js";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    overflow-x: hidden;
    `

const MessageList = styled.div`
    width: 100%;
    height: 70vh;
    border: solid 1px #EEE;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: #ecf0f1;
    overflow-y: scroll;
    `

const CurrentChat = props => {

    // let arrMessages = [];
    let arrMessages2 = [];

    props.users.map((currUser, indexU) => {
        return currUser.messages.map(currMsg => {
            if ((currMsg.receiver === props.currentChatUser.name && currUser.name === props.loggedUser.name) ||
             (currMsg.receiver === props.loggedUser.name && currUser.name === props.currentChatUser.name)) {
                arrMessages2.push({ sentBy: currUser.name, pfp: currUser.pfp, message: currMsg });
             }
        })
    })
    
    

    // for (let i = 0; i < props.users.length; i++) {
    //     const currUser = props.users[i];

    //     for (let j = 0; j < currUser.messages.length; j++) {
    //         const currMsg = props.users[i].messages[j];
    //         if ((currMsg.receiver === props.currentChatUser.name && currUser.name === props.loggedUser.name) || (currMsg.receiver === props.loggedUser.name && currUser.name === props.currentChatUser.name)) {
    //             arrMessages.push({ sentBy: currUser.name, pfp: currUser.pfp, message: currMsg });
    //         }
    //     }
    // }
    

    

    // arrMessages.sort((msg1, msg2) => (msg1.message.timestamp > msg2.message.timestamp) ? 1 : -1);
    arrMessages2.sort((msg1, msg2) => (msg1.message.timestamp > msg2.message.timestamp) ? 1 : -1);


    return (
        <Container>
            <CurrentChatUser loggedUser={props.loggedUser} currentChatUser={props.currentChatUser} />
            <MessageList>
                {arrMessages2.length !== 0 ? 
                arrMessages2.map((msg) => 
                <ChatMessage 
                sentBy={msg.sentBy} 
                pfp={msg.pfp} 
                loggedUser={props.loggedUser} 
                message={msg.message} 
                key={uuid()} />) : 
                []}
            </MessageList>
            <Input loggedUser={props.loggedUser} sendMessageHandler={props.sendMessageHandler} />
        </Container>

    )
};

export default CurrentChat;