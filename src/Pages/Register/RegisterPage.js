import React, { useEffect } from 'react'
import Register from '../../Components/Register/Register'
import AuthService from '../../AuthService'

const RegisterPage = () => {

  const user = AuthService.getCurrentUser()

  useEffect( ()=>{
    if(user){
      AuthService.logout()
    }
  }, [user] )

  return (
    <div className='register'>
      <Register />
    </div>
  )
}

export default RegisterPage
