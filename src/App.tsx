import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import { Search } from './components/Search/index'
import { getUser } from './services/user'
import './App.css'
import { UserModel } from './models/user.model'
import { UserCard } from './containers/UserCard'

function App() {

	const [inputUser, setInputUser] = useState('octocat')
	const [userState, setUserState] = useState<UserModel | null>(null)

  useEffect(() => {
    getUser(inputUser)
      .then(response => {
        response.message !== 'Not Found'
         && setUserState(response)
      })
  }, [inputUser])


  return (
    <Container
      sx={{
        background: '#373e47',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Search setInputUser={setInputUser}/>
      <UserCard userState={userState}/>
    </Container>
  )
}

export default App
