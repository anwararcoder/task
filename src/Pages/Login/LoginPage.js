import React, { useEffect } from 'react'
import Login from '../../Components/Login/Login'
import AuthService from '../../AuthService'

const LoginPage = () => {

  const user = AuthService.getCurrentUser()

  useEffect( ()=>{
    if(user){
      AuthService.logout()
    }
  }, [user] )

  return (
    <div className='login'>
      <Login />
    </div>
  )
}

export default LoginPage
