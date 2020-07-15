import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Style.css'


const ButtonV2 = (props) => {
  return (
    <Link className="general-btn-2" to={props.link}>{props.linkText}</Link>
  )
}

export default ButtonV2