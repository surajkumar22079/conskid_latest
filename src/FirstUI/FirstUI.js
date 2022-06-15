import React from 'react'
import Grid from "@material-ui/core/Grid"
import "./FirstUI.css"
import Navbar from "./Navbar"
import Content from "./ConskidIsBest"

const FirstUI = () => {
    return (
        <>
            <Grid container xs={12} id="FirstUI_BG">
                <Navbar/>
                <Content/>
            </Grid>
        </>
    )
}

export default FirstUI
