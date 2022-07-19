import React from 'react'
import "./Services.css";
import Grid from "@material-ui/core/Grid"







const Template = (props) => {

    // const message=()=>{
    //     alert("hi")
    // }

    
    return (
        <>
            <Grid item container className="Template" id={props.id}>

                <Grid item container className="DP_Logo">
                  
                  <img src={props.Logo} alt={props.Heading} title={props.Heading}/>
                  
                </Grid>
                <Grid item container className="Template_content">

                    <p className="Head">{props.Heading}</p>
                    <span id="Description">{props.Description}</span>
                    <Grid className='ButtonContainer' item container>

                    <button id="TemplateButton" ><a href={props.Link} target= '_blank' style={{'textDecoration':'none', color:'white'}}>Know More</a></button>

                    </Grid>

                </Grid>


            </Grid>
        </>
    )
}

<<<<<<< HEAD
export default Template
=======
export default Template
>>>>>>> a604c266835eea5004b39a66a5007263bc672e86
