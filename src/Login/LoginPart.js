
import React,{useState} from 'react'
import Grid from "@material-ui/core/Grid"
import "./LoginSignUp.scss"
import { Link } from 'react-router-dom'
import Gmail from "../Asset/Google.svg"
import FaceBook from "../Asset/Facebook.svg"

const LoginPart =()=>{


   const [Username,setUsername]=useState("");

   const [Password,setPassword]=useState("");

  const clearAll =()=>{

    alert(`Name : ${Username} Password : ${Password}}`)

    setUsername("");
     setPassword("")
  }



    return(<>
    <Grid container id="LoginSignUpArea">

<Grid container id="HeadingBlock">

  <p>Welcome Back!</p>
  <pre>Login to continue</pre>

</Grid>

<Grid container item id="FormBlock">

  <form>
    <input type="text" placeholder='Username' name="username" value={Username} onChange={(e)=>{
      setUsername(e.target.value)
    }} />

    <input type="password" placeholder='Password' name="Password" value={Password} onChange={(e)=> setPassword(e.target.value)}/>

    <Grid container item id="Forgot_Checkbox">

      <Grid style={{ border: "1px solid green", justifyContent: "start", display: "flex" }}><input type="checkbox" />Remember Me</Grid>

      <Grid style={{ border: "1px solid green", color: "#09862D" }} id="ForgetPassword">Forgot Password?</Grid>

    </Grid>

    <Grid container item id="Buttons">

      <Link tag="a" to="/Sign Up" style={{textDecoration:"none"}}><Grid id="SignUpbutton" >Create Account</Grid></Link>

      <Link tag="button" to="/Log In" onClick={clearAll} style={{textDecoration:"none"}}><Grid id="Loginbutton"  >Log In</Grid></Link>

    </Grid>

    <Grid container item id="Google_FB">

      <img src={FaceBook} alt="FB" title="Facebook" />
      <img src={Gmail} alt="Gmail" title="Gmail" />


    </Grid>


  </form>



</Grid>

</Grid>

    </>);
}


export default LoginPart