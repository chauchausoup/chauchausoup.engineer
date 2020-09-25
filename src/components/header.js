import React from "react"
import {Link} from 'gatsby';


export default function Header() {
  return (
    <div style={{ background: `lightgrey` ,height:"150px"}}>
      <Link to="/"><ActualHead/></Link>
    </div>
  )
}


function ActualHead(){
    return(
        <>
        <div style={{ background: `lightblue` ,height:"50px",width:"200px",padding:"20px"}}>
        <p>chauchausoup.engineer</p>
      </div>
      <Link to ="/about">About</Link><br/>
      <Link to ="/blogs">Blogs</Link>
      <div id="socials">
   
      </div>
      </>
    )
}
