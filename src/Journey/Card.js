import React from 'react'
import "./Journey.css"
import Grid from "@material-ui/core/Grid"
import CardDesign from "../Asset/Path399.svg"
import DP from "../Asset/depositphotos_8803246-stock-photo-asian-college-student@2x.png"




const Card = (props) => {
    return (
        <>
            <Grid className="Card">

                <Grid className="Card_Text_Holder">
                    <Grid className="Card_Content">{props.Content}</Grid>
                </Grid>
                <Grid className="Name_Holder">
                    <picture>
                        <source srcSet={props.Image} alt="ProfileDP" title={props.Name}></source>
                        <img src={DP} alt="ProfileDP" title={props.Name} />
                    </picture>
                  
                    <div>
                        <p>{props.Name}</p>
                        {
                            (props.Company!="")?<span>{props.Institute}<br/>Intern At {props.Company}</span>:<span>{props.Institute}<br/>Member At Conskid</span>
                        }
                        
                        
                    </div>
                </Grid>

            </Grid>
        </>
    )
}

export default Card
