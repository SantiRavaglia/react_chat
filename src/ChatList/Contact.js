import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding-left: 15px;
    cursor: pointer;
    ${props => props.currentChatUser === props.contactUser && 'background: #595959'};
    `

// const SelectedContactLine = styled.div`
//     display: flex;
//     border: 1px solid #ff3636;
//     justify-content: flex-end;
//     `

const UserDataContainer = styled.div`
    display: flex;
    justify-content: space-between;
    `

const UserPFP = styled.img`
    border-radius: 50%;
    height: 50px;
    align-self: center;
    `

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
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
const DataContainer = styled.div`
    display: flex;
    justify-content: space-between;
    `

const Contact = props => {

    const displayLastMessage = () => {
        const shownMessages = [...props.contactUser.messages, ...props.loggedUser.messages].filter(currMsg => {
            if (currMsg.receiver === props.contactUser.name || currMsg.receiver === props.loggedUser.name) {
                return currMsg;
            }
        })
        if (shownMessages.length > 0) {
            return  shownMessages.reduce((max, value) => value.timestamp > max.timestamp ? value : max);
        } else {
            return {message: '', timestamp: 0, receiver: ''}
        }
    }
    

    function pad(a, b) {
        return (1e15 + a + '').slice(-b);
    }

    const changeContactHandler = () => {
        props.changeContactHandler(props.contactUser)
    }

    return (
        <Container currentChatUser={props.currentChatUser} contactUser={props.contactUser} onClick={changeContactHandler}>
            <DataContainer>
                <UserDataContainer>
                    <UserPFP src={props.contactUser.pfp} />
                    <TextContainer>
                        <UserName>{props.contactUser.name}</UserName>
                        <LastMessage>{displayLastMessage().message}</LastMessage>
                    </TextContainer>    
                </UserDataContainer>
                {displayLastMessage().timestamp !== 0 && <Time>{pad(new Date(displayLastMessage().timestamp * 1000).getHours(), 2) + ':' + pad(new Date(displayLastMessage().timestamp * 1000).getMinutes(), 2)}</Time>}
            </DataContainer>
            {props.currentChatUser.name === props.contactUser.name /* && <SelectedContactLine />*/}
        </Container>
    )
}

export default Contact;