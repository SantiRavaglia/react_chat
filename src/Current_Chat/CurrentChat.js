import React, {useEffect, useRef} from "react";
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let arrMessages = [];

    props.users.map((currUser, indexU) => { // ARRAY CON LOS MENSAJES CUYO EMISOR ES EL USUARIO LOGGEADO Y RECEPTOR EL DEL 
                                            // CHAT SELECCIONADO Y VICEVERSA PARA MOSTRARLOS EN EL CHAT
        // eslint-disable-next-line array-callback-return
        return currUser.messages.map(currMsg => {
            if ((currMsg.receiver === props.currentChatUser.name && currUser.name === props.loggedUser.name) ||
             (currMsg.receiver === props.loggedUser.name && currUser.name === props.currentChatUser.name)) {
                arrMessages.push({ sentBy: currUser.name, pfp: currUser.pfp, message: currMsg });
             }
        })
    })
    
    arrMessages.sort((msg1, msg2) => (msg1.message.timestamp > msg2.message.timestamp) ? 1 : -1);

    const messageBottom = useRef();

    const scrollToBottom = () => {
        messageBottom.current.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => { // AL MANDAR UN MENSAJE BAJA HASTA EL FONDO DEL CHAT
        scrollToBottom();
    }, [arrMessages])

    return (
        <Container>
            <CurrentChatUser loggedUser={props.loggedUser} currentChatUser={props.currentChatUser} />
            <MessageList>
                {arrMessages.length !== 0 ? 
                arrMessages.map((msg) => 
                <ChatMessage 
                sentBy={msg.sentBy} 
                pfp={msg.pfp} 
                loggedUser={props.loggedUser} 
                message={msg.message} 
                key={uuid()} />) : 
                []}
                <div ref={messageBottom}/>
            </MessageList>
            <Input loggedUser={props.loggedUser} sendMessageHandler={props.sendMessageHandler} />
        </Container>

    )
};

export default CurrentChat;