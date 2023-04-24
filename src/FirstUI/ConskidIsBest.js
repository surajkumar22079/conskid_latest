import React from 'react'
import Grid from "@material-ui/core/Grid"
import "./FirstUI.css";
import Vector from "../Asset/main_vector.svg"
import { Link } from 'react-router-dom'
// import ComingSoon from '../ComingSoon/ComingSoon';
// import { Button } from '@material-ui/core';


const ConskidIsBest = () => {
    return (
        <>
            <Grid container xs={12} id="Conskid_wrapper" >
                <Grid item id="Non_vector" >
                    {/* style={{border:"1rem solid orange"}} */}

                    <p>Learn, Train <br /><span> and Excel</span></p>
                    <pre>Consultation on Skill Development</pre>
                    <div className="buttons">
                        <Link tag="a" to='/ForCompany' title="Join Now" style={{ textDecoration: "none" }}  > <div id="Join_Button">For Company</div></Link>
                        <Link tag="a" to='/ForStudent' title="Join Now" style={{ textDecoration: "none" }}  > <div id="Join_Button">For Student</div></Link>
                    </div>
                </Grid>
                <Grid item md={6} xs={6} id="Mainvector"   >
                    {/* style={{border:"1rem solid orange"}} */}
                    <img src={Vector} alt="Mainvector" id="vector" />
                </Grid>

            </Grid>
        </>
    )
}

export default ConskidIsBest
