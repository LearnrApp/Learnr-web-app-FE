import React from 'react'
import {Link} from 'react-router-dom'
import '../../../../styles/UserDashboard.css'


const SubPlanCard = (props) => {
  return (
    <React.Fragment>
      <div className="bg-white d-flex flex-column align-items-center justify-content-center py-3 px-2">
        <h5 style={{fontSize: '24px'}} className="text-center">{props.planName}</h5>
        <span style={{fontSize: '25px'}} className="font-weight-bold mb-4"><span className="small">$</span>{props.planAmount}</span>
        <p className="text-center">{props.planDetails}</p>
        <p className="text-center">{props.planDetails2}</p>
        <p className="text-center">{props.planDetails3}</p>
        <p className="text-center">{props.planDetails4}</p>
        <Link className="upload-btn">Subscribe</Link>
      </div>
    </React.Fragment>
  )
}

export default SubPlanCard