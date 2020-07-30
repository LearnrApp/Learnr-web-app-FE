import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/UserDashboard.css'
// import SidebarItems from './SidebarItems'

const Sidebar = (props) => {
  const Name = (prop) => {
    return (
      <p>{prop.greet}</p>
    )
  }

  return (
    <React.Fragment>
      <div className="sidebar--wrap">
        <div>
          <Name greet={'Works'} />
        </div>
        {/* <SidebarItems sidebaricon={require('')} sidebartext={''} />
        <SidebarItems sidebaricon={require('')} sidebartext={''} />
        <SidebarItems sidebaricon={require('')} sidebartext={''} />
        <SidebarItems sidebaricon={require('')} sidebartext={''} />
        <SidebarItems sidebaricon={require('')} sidebartext={props.sidebartext} />
        <Link to=""><SidebarItems sidebaricon={require('')} sidebartext={''} /></Link> */}
      </div>
    </React.Fragment>
  )
}

export default Sidebar