import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Style.css'

const Button = (props) => {
  return (
    <Link className="general-btn" to={props.link}>{props.linkText}</Link>
  )
}

export default Button