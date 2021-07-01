import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding-left: 15px;
    cursor: pointer;
    ${props => props.currentChatUser === props.contactUser && 'background: #595959'};
    `

const SelectedContactLine = styled.div`
    display: flex;
    border: 1px solid #ff3636;
    justify-content: flex-end;
    `

const UserDataContainer = styled.div`
    display: flex;
    `

const UserPFP = styled.img`
    border-radius: 50%;
    height: 50px;
    align-self: center;
    `

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: Montserrat;
    padding-left: 10px;
    `

const UserName = styled.h3`
    color: #ffffff;
    font-size: 16px;
    `

const LastMessage = styled.p`
    color: #828282;
    font-size: 11px;
    `

const Time = styled.label`
    color: #828282;
    font-size: 10px;
    text-align: right;
    `

    const MiscContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    `
// const DataContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     `

const Contact = props => {

    const displayLastMessage = () => { // SELECCIONA EL ULTIMO MENSAJE QUE TUVIERON DOS USUARIOS PARA CARGARLO EN LA PREVIEW
        // eslint-disable-next-line array-callback-return
        const shownMessages = [...props.contactUser.messages, ...props.loggedUser.messages].filter(currMsg => {
            if (currMsg.receiver === props.contactUser.name || currMsg.receiver === props.loggedUser.name) {
                return currMsg;
            }
        })
        if (shownMessages.length > 0) {
            return shownMessages.reduce((max, value) => value.timestamp > max.timestamp ? value : max);
        } else {
            return { message: '', timestamp: 0, receiver: '' }
        }
    }


    function pad(a, b) { // SI LA HORA ES DE SOLO UN DIGITO, LE AGREGA UN 0 ADELANTE 
        return (1e3 + a + '').slice(-b);
    }

    const changeContactHandler = () => { // SI CLICKEO UN CONTACTO, CAMBIA DE CHAT Y ACTUALIZA EL ESTADO
        props.changeContactHandler(props.contactUser)
    }

    return (
        <Container currentChatUser={props.currentChatUser} contactUser={props.contactUser} onClick={changeContactHandler}>
            <UserDataContainer>
                <UserPFP src={props.contactUser.pfp} />
                <TextContainer>
                    <UserName>{props.contactUser.name}</UserName>
                    <LastMessage>{displayLastMessage().message.length > 40 ? displayLastMessage().message.substring(0, 40) + '...' : displayLastMessage().message}</LastMessage>
                </TextContainer>
            </UserDataContainer>
            <MiscContainer>
            {displayLastMessage().timestamp !== 0 && <Time>{pad(new Date(displayLastMessage().timestamp * 1000).getHours(), 2) + ':' + pad(new Date(displayLastMessage().timestamp * 1000).getMinutes(), 2)}</Time>}
            {props.contactUser.name === props.currentChatUser.name && <SelectedContactLine/>}
            </MiscContainer>
        </Container>
    )
}

export default Contact;