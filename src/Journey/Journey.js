import React from 'react'
import Grid from "@material-ui/core/Grid"
import "./Journey.css";
import Journey_vector from "../Asset/Journey_vector.svg"
import Carousel from "./Carousel"




const Journey = () => {

    return (
        <>
            <Grid container id="Journey" xs={12}>
                <Grid item xs={12} id="Journey_Heading">Journey with Conskid</Grid>
                <Grid item container id="Journey_vector" xs={12}>
                    <Grid item xs={10} id="vector"><img src={Journey_vector} alt="Journey_with_conskid" title="Journey With Conskid" /></Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} id="Testimonial">
                <Grid item xs={12} id="Testimonial_Heading">Testimonials</Grid>
                <Grid item xs={12} id="Testimonial_Carousel">
                    <Carousel/>
                </Grid>

            </Grid>
        </>
    )
}

export default Journey
