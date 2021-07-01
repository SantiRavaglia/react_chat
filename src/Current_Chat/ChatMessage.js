import React from "react";
import styled from 'styled-components';

const MsgBubble = styled.div`
    background-color: ${props => props.sentBy === props.loggedUser ? '#ffe8e8' : '#ffffff'} ;
    border-radius: 10%;
    text-align: ${props => props.sentBy === props.loggedUser ? 'right' : 'left'};
    border-radius: 5px;
    `

const MessageContainer = styled.div`
    display:flex;
    flex-direction: ${props => props.sentBy === props.loggedUser ? 'row' : 'row-reverse'};
    align-items: center;
    ${props => props.sentBy === props.loggedUser ? 'padding-left: 100px' : 'padding-right: 100px'};
    `

const Time = styled.label`
    font-family: Montserrat;
    font-size: 10px;
    text-align: ${props => props.sentBy === props.loggedUser ? 'left' : 'right'};
    `;

const Text = styled.p`
    font-family: Montserrat;
    color: #111;
    padding: 10px;
    line-height: 25px;
    `;

const Image = styled.img`
    border-radius: 50%;
    height: 50px;
    `

const SentMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 20px;
    `;

const MessageRow = styled.div`
    display: flex;
    flex-direction: ${props => props.sentBy === props.loggedUser ? 'row-reverse' : 'row'};
    `

const ChatMessage = props => {

    function pad(a, b) {
        return (1e15 + a + '').slice(-b);
    }


    return (
        <MessageRow sentBy={props.sentBy} loggedUser={props.loggedUser.name}>
            <MessageContainer sentBy={props.sentBy} loggedUser={props.loggedUser.name}>
                <SentMessage>
                    <Time sentBy={props.sentBy} loggedUser={props.loggedUser.name}>{pad(new Date(props.message.timestamp * 1000).getHours(), 2) + ':' + pad(new Date(props.message.timestamp * 1000).getMinutes(), 2)}</Time>
                    <MsgBubble sentBy={props.sentBy} loggedUser={props.loggedUser.name}>
                        <Text sentBy={props.sentBy}>{props.message.message}</Text>
                    </MsgBubble>

                </SentMessage>
                <Image src={props.pfp} />
            </MessageContainer>
        </MessageRow>
    )
}

export default ChatMessage;