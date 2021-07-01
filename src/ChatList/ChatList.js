import styled from 'styled-components';
import Header from './Header.js';
import ChangeUser from './ChangeUser.js';
import ContactsList from './ContactsList.js';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    `
    const RedLine = styled.div`
    border: 1px solid #ff3636 ;
    `

const ChatList = props => {
  return (
    <Container>
      <Header />
      <ChangeUser 
      users={props.users} 
      loggedUser={props.loggedUser} 
      changeUserHandler={props.changeUserHandler} 
      addUserHandler={props.addUserHandler}/>
      <RedLine/>
      <ContactsList 
      users={props.users} 
      loggedUser={props.loggedUser} 
      currentChatUser={props.currentChatUser} 
      changeContactHandler={props.changeContactHandler}/>
    </Container>
  )
}

export default ChatList;