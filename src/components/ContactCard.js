import React from 'react'
import user from "../images/user.png"

function ContactCard(props) {
  const {id, name, email} = props.contact
  return (
    <div className="item">
      <img src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <i className="trash alternate outline icon" style={{color:"red", marginTop:"-95px", fontSize:"50px"}} onClick={() => props.clickHandler(id)}></i>
      </div>
      
    </div>
    
  )
}

export default ContactCard
