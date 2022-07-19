
import React,{useState} from 'react'
import Grid from "@material-ui/core/Grid"
import "./LoginSignUp.scss"
import { Link } from 'react-router-dom'
import Gmail from "../Asset/Google.svg"
import FaceBook from "../Asset/Facebook.svg"

const SignUpPart = () => {

  const [Username,setUsername] = useState("");

  const [Email,setEmail] = useState("");

  const [MobNum,setMobNum] = useState("");

  const [Password,setPassword] = useState("");

  const [ConfirmPassword,setConfirmPassword] = useState("");

  const ClearAll=()=>{
    alert(`${Username},${Email},${MobNum},${Password},${ConfirmPassword}`)
    setUsername("");
    setEmail("");
    setMobNum("");
    setPassword("");
    setConfirmPassword("");



  }

  return (<>
    <Grid container id="LoginSignUpArea" style={{height:"auto",marginBottom:"100rem"}}>

      <Grid container item id="HeadingBlock">

        <p>Create Account</p>
        <pre>SignUp to continue</pre>

      </Grid>

      <Grid container item id="FormBlock">

        <form>
        <input type="text" placeholder='Username' name="Username" value={Username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="email" placeholder='Email' name="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="number" placeholder='Mobile Number' name="Mobile_Number" value={MobNum} onChange={(e)=>setMobNum(e.target.value)}/>

          <p style={{color:"#858585",fontSize:"28rem",fontFamily:"CalibriB"}}>Create Password</p>

          <input type="password" placeholder='Password' name="Password" value={Password} onChange={(e)=>setPassword(e.target.value)} />

          <p style={{color:"#858585",fontSize:"28rem",fontFamily:"CalibriB"}}>Use 8 or more Characters</p>

          <input type="password" placeholder='Confirm' name="Confirm" value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />

          <Grid container item id="Buttons">

            <Link tag="a" to="/Log In" style={{ textDecoration: "none" }}><Grid id="Loginbuttoninsignup" >Log In</Grid></Link>

            <Link tag="button" to="/Sign Up" style={{ textDecoration: "none" }} onClick={ClearAll}><Grid id="SignUpbuttoninsignup" style={{}} >Sign Up</Grid></Link>

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


export default SignUpPart