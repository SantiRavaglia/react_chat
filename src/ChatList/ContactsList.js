import styled from "styled-components";
import Contact from "./Contact.js";
import uuid from "react-uuid";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #262626;
    height:73vh;
    overflow-y: scroll;
    `

const ContactsH2 = styled.h2`
    font-family: Montserrat;
    color: #ffffff;
    text-align: center;
    `

const ContactsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    `

const ContactsList = props => {

    return (
        <Container>
            <ContactsH2>Contacts</ContactsH2>
            <ContactsListContainer>
                {props.users.filter(user => user.name !== props.loggedUser.name).map(user => <Contact currentChatUser={props.currentChatUser} loggedUser={props.loggedUser} contactUser={user} changeContactHandler={props.changeContactHandler} key={uuid()}/>)}
            </ContactsListContainer>
        </Container>
    )
}

export default ContactsList;