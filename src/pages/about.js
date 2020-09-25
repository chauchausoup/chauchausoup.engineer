import React from "react"
import Header from '../components/header';
import Footer from '../components/footer';
import me from "../images/2.jpg"


export default function About() {
  return (
      <>
      <Header/>
    <div style={{ color: `teal` }}>
      <h1>About Me</h1>
     
      <img src={me} alt="Me"  style={{ height: "30vh",width:"13%" }}/>
      <br/>
      <a href="https://kdhakal.com.np">Check my Protfolio here ! </a>
      <br/>
      

    </div>
    <Footer/>
    </>
  )
}