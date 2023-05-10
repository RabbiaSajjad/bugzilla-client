import React from 'react'

import Home from '../components/Home'
import SignInForm from '../components/SignInForm'
import MenuBar from '../components/MenuBar';


const HomePage = () => {

  return (
    <div>
       {localStorage.getItem('token') ? <MenuBar/> : <SignInForm/>}
    </div>
  )
}
export default HomePage
