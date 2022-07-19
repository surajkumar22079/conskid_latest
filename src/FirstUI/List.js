import React from 'react'
import { Link } from 'react-router-dom'

export const List = (props) => {

    const List1 = ["Career Counselling","Internship Pool","Test/Practice Papers","Certified Courses","CV Making","Mock Interview"]
    const List3 = ["Log In","Sign Up","Contact us","About us"]
    return (
        <>
            <ul>
                {  props.Number=="1"?
                    List1.map((x)=>{
                       return <li><a href={`#${x}`}>{x}</a></li>
                    }):""
                }

            </ul>

            <ul>   
                {  props.Number=="2"?
                    List1.map((x)=>{
                       return <li><a  href={`#${x}`}>{x}</a></li>
                    }):""
                }
            </ul>
            <ul style={{left:"-20rem",top:"75rem",width:"200rem"}}>
                {  props.Number=="3"?
                    List3.map((x)=>{
                       return <li style={{textAlign:"left"}}><Link tag="a" to={`/${x}`}>{x}</Link></li>
                    }):""
                }
            </ul>
        </>
    )
}

export default List