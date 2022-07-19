import React from 'react'
import Grid from "@material-ui/core/Grid"
import "./LoginSignUp.scss"
import { Link } from 'react-router-dom'
import Logo from "../Asset/logo.svg"

import LoginPart from './LoginPart'


const Login = () => {
  return (
    <>
      <Grid container id="LoginSignUpPage">

        <Grid container item id="NavbarLogo">

          <Link tag="a" to="/" ><img src={Logo} alt="Conskid Logo" title='Home' id="Logo" /></Link>

        </Grid>

        <LoginPart/>

      </Grid>
    </>
  )
}

export default Login