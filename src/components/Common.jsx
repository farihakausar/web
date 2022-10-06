import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Common(props) {
  return (
    <div className='container'>
    <div className="itsme">
      <div className='col-md-6'>
<h1 >{props.title}</h1>
<h2 style={{color:"blue",fontSize:"50px"}}>{props.des}</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus repudiandae ducimus.</p>
{/* <button className="btn btn-outline-primary"style={{borderRadius:"20px"}}>
    <a href={props.visit}>{props.button1}</a>
    </button> */}
    <NavLink className="nav-link active  btn btn-outline-primary menu_active" aria-current="page" to={props.visit}>{props.button1}</NavLink>
      </div>
      <div className='col-md-6'>
        <img style={{margin:"20px",padding:"20px",color:"blue"}}src={props.imgsrc} alt="" />
      </div>
    </div>
  </div>
  )
}
