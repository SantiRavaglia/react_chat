import { useState, useEffect } from 'react';
import ChatList from './ChatList/ChatList.js';
import CurrentChat from './Current_Chat/CurrentChat.js';
import styled from 'styled-components';
import firebase from './firebase.js';
import fetchData from './fetchData.js';
import uuid from 'react-uuid';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-grow: 1;
  `

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [loggedUser, setLoggedUser] = useState('Sergio Denis');
  const [currentChatUser, setCurrentChatUser] = useState( 'Laura Gonzalez' );

  useEffect(() => { // TRAER TODOS LOS USUARIOS CON SUS FOTOS Y MENSAJES CORRESPONDIENTES
    const fetchData = async () => {
      setLoading(true);
      const db = firebase.firestore();
      const data = await db.collection('users_list').get()
      let users_raw = data.docs.map(doc => doc.data());

      setUsers(users_raw);
      setLoading(false);
    }
    fetchData();
  }, [])

  const sendMessageHandler = inputValue => { // ENVIAR MENSAJE A DB Y ACTUALIZAR ESTADO PARA RENDERIZARLO
    const newMessage = { ...(users.filter(user => user.name === loggedUser)[0]) }

    let sentMessageMap = {message: inputValue, timestamp: firebase.firestore.Timestamp.fromDate(new Date()), receiver: currentChatUser}

    newMessage.messages.push(sentMessageMap);

    const db = firebase.firestore();
    db.collection('users_list').doc(users.filter(user => user.name === loggedUser)[0].id).set({...newMessage})
    let usersAux = [...users];
    usersAux.map(user => {
      if(user.name === loggedUser) {
        user = {...newMessage}
      }
      return user;
    })
    setUsers(usersAux);
  }

  const changeContactHandler = user => { // CAMBIAR EL USUARIO CUYO CHAT TENEMOS ABIERTO
    setCurrentChatUser(user.name)
  }

  const changeUserHandler = username => { // CAMBIAR USIARIO LOGEADO
    setLoggedUser(users.filter(user => user.name === username)[0].name)
  }

  async function addUserHandler() { // AGREGAR USUARIO DE API
    const data = await fetchData();
    const id = uuid();
    
    const db = firebase.firestore();
    db.collection('users_list').doc(id).set({...data, messages: [], id: id})
    
    let aux = [...users];
    aux.push({...data, messages: [], id: id});
    setUsers(aux);
  }

  return (
    <>
      {loading === false &&
        <Container>
          <ChatList 
          users={users} 
          loggedUser={users.filter(user => user.name === loggedUser)[0]} 
          currentChatUser={users.filter(user => user.name === currentChatUser)[0]} 
          changeContactHandler={changeContactHandler} changeUserHandler={changeUserHandler}
          addUserHandler={addUserHandler}
          />
          <CurrentChat 
          users={users} 
          loggedUser={users.filter(user => user.name === loggedUser)[0]} 
          currentChatUser={users.filter(user => user.name === currentChatUser)[0]} 
          sendMessageHandler={sendMessageHandler} />
        </Container>}
    </>
  );
}

export default App;