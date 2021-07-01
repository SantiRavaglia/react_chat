import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    background: #262626;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    // justify-content: center;
    `

const ProfilePicture = styled.img`
    border-radius: 50%;
    height: 65px;
    display: flex;
    justify-content: center;
    `

const User = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;;
    `

const UserName = styled.div`
    color: #ffffff;
    font-size: 0.8rem;
    font-family: Montserrat;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    `

const ChangeUserButton = styled.button`
    background: #ff3636;
    border: none;
    outline: none;
    font-family: Montserrat;
    color: #ffffff;
    `

const AddUserButton = styled.button`
    background: #ff3636;
    border: none;
    outline: none;
    font-family: Montserrat;
    color: #ffffff;
    margin-top: 5px;
    `

const ChangeUserContainer = styled.div`
    display:flex;

    `

const UserSelection = styled.select`
    padding-left: 5px;
    font-family: Montserrat;
    `

const ChangeUser = props => {

    const [changingUser, setChangingUser] = useState(false);

    const changeUserHandler = event => { // CAMBIA DE USUARIO Y ACTUALIZA EL ESTADO
        props.changeUserHandler(event.target.value);
        setChangingUser(false)
    }

    const alternateChangingUserHandler = () => { // ALTERNA EL ESTADO DE CAAMBIAR USUARIO Y 
        changingUser ? setChangingUser(false) : setChangingUser(true);
    }

    return (
        <Container>
            <ProfilePicture src={props.loggedUser.pfp} alt='profile picture' />
            <User>
                <UserName>{props.loggedUser.name}</UserName>
                <ChangeUserContainer>
                    <ChangeUserButton onClick={alternateChangingUserHandler}>Change User</ChangeUserButton>
                    {changingUser &&
                        <UserSelection onChange={changeUserHandler} value={props.loggedUser.name}>
                            {props.users.map(user => <option value={user.name} key={user.id}>{user.name}</option>)}
                        </UserSelection>}
                </ChangeUserContainer>
                <AddUserButton onClick={props.addUserHandler}>Add User</AddUserButton>
            </User>
        </Container>
    )
}

export default ChangeUser;