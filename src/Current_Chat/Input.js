import { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 10vh;
    align-items: center;
    margin-top:5px;
    `

const InputMessage = styled.input`
    width: 80%;
    height: 30px;
    border-radius: 20px;
    font-family: Montserrat;
    border: none;
    background: #e1e7e8;
    `

const SendButton = styled.button`
    font-family: Montserrat;
    background: #e1e7e8;
    border: none;
    outline: none;
    height:30px;
    color: #4a4a4a;
    border-radius: 10px;
    width: 70px;
    margin-left: 5px;
    `

const Input = props => {

    let inputValueRef = useRef();

    const sendMessageHandler = () => {
        props.sendMessageHandler(inputValueRef.current.value);
        inputValueRef.current.value = '';
        inputValueRef.current.focus();
    }

    return (
        <>
            <Container>
                <InputMessage type='text' ref={inputValueRef} ></InputMessage>
                <SendButton onClick={sendMessageHandler}>SEND</SendButton>
            </Container>
        </>
    )
}

export default Input;