import React, {useState, useRef} from 'react'
import Helmet from 'react-helmet'
import {Link} from  'react-router-dom'
import SidebarItems from '../../components/Users/SidebarItems'
import NavBarUser from '../../components/navbar/NavBarUser'
import YourKids from '../../components/dashboard/parent/Courses/YourKids'
import AchievementParent from '../../components/dashboard/parent/Achievements/Achievements'
import HelpSupport from '../../components/dashboard/parent/Help/ParentHelp'
import ParentProfile from '../../components/dashboard/parent/Profile/ParentProfile'
import '../../styles/UserDashboard.css'
import '../../styles/Style.css'

const StudentDashboard = () => {
  const documentTitle = 'Learnr | Parent Dashboard'

  const [dashboardMenu, updateMenu] = useState(<YourKids />)

  const yourKidsLink = useRef()
  const achievementsLink = useRef()
  const helpLink = useRef()
  const profileLink = useRef()
  const subscriptionLink = useRef()

  const updateBackgroundYourKids = () => {
    if(yourKidsLink.current) {
      yourKidsLink.current.classList.add('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
      subscriptionLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundAchievements = () => {
    if(achievementsLink.current) {
      achievementsLink.current.classList.add('sidebar--item--active')
      yourKidsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
      subscriptionLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundHelp = () => {
    if(helpLink.current) {
      helpLink.current.classList.add('sidebar--item--active')
      yourKidsLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
      subscriptionLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundProfile = () => {
    if(profileLink.current) {
      profileLink.current.classList.add('sidebar--item--active')
      yourKidsLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      subscriptionLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundSubscription = () => {
    if(subscriptionLink.current) {
      subscriptionLink.current.classList.add('sidebar--item--active')
      yourKidsLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="The dashboard panel for parents to access all functions available to them on the application."
        />
      </Helmet>
      <NavBarUser />
      <div className="container-fluid px-0 dash-wrap">
        {/* <div className="sidebar--wrap">
          <div className="sidebar--greet px-3 py-4">
            <span className="text-white">Hello, James</span>
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/readme.svg')} sidebartext={'Courses'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achievements'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/log-in.svg')} sidebartext={'Log Out'} />
          </div>
        </div> */}
        <div className="sidebar--wrap">
          <div className="sidebar--greet px-3 py-4">
            <span className="text-white">Hello, James</span>
          </div>
          <div className="pt-4">
            <div
              ref={yourKidsLink}
              onClick={() => {
              updateMenu(<YourKids />)
              updateBackgroundYourKids()
            }}
            className="sidebar--item--active sidebar--item">
              <SidebarItems sidebaricon={require('../../images/user.svg')} sidebartext={'Your Kids'} />
            </div>
            <div
              ref={achievementsLink}
              onClick={() => {
              updateMenu(<AchievementParent />)
              updateBackgroundAchievements()
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achievements'} />
            </div>
            <div
              ref={helpLink}
              onClick={() => {
              updateMenu(<HelpSupport />)
              updateBackgroundHelp()
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
            </div>
            <div
              ref={profileLink}
              onClick={() => {
              updateMenu(<ParentProfile />)
              updateBackgroundProfile()
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
            </div>
            <div
              ref={subscriptionLink}
              onClick={() => {
              // updateMenu(<Subscription />)
              updateBackgroundSubscription()
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/rss.svg')} sidebartext={'Subscription'} />
            </div>
            <div onClick={() => {
              
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/log-in.svg')} sidebartext={'Log Out'} />
            </div>
          </div>
        </div>
      <React.Fragment>{dashboardMenu}</React.Fragment>
      </div>
      <React.Fragment>
      <div className="bg-white fixed-bottom bottom-navigate">
        <div className="d-flex justify-content-between mx-2 mx-md-3 align-items-center">
          <div onClick={() => {
            updateMenu(<YourKids />)
          }} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/user.svg')} sidebartext={'Your Kids'} />
          </div>
          <div onClick={() => {
            updateMenu(<HelpSupport />)
          }} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
          </div>
          <div onClick={() => {
            updateMenu(<AchievementParent />)
          }} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achieved'} />
          </div>
          <div onClick={() => {
            updateMenu(<ParentProfile />)
          }} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
          </div>
          <div onClick={() => {
            // updateMenu(<QuizRecords />)
          }} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/rss.svg')} sidebartext={'Sub'} />
          </div>
        </div>
      </div>
      </React.Fragment>
    </React.Fragment>
  )
}

export default StudentDashboard