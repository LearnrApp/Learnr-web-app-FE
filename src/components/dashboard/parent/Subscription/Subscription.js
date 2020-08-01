import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'react-router-dom'
import SubPlanCard from './SubPlanCard'
import '../../../../styles/UserDashboard.css'


const Subscription = () => {
  const documentTitle = 'Learnr | Parent Dashboard-Subscription'

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="The Subscription section of the parent dashboard."
        />
      </Helmet>
      <div style={{height: '100vh'}} className="main--wrap">
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >James Ferdinand</span>
            <img className="mx-3" src={require('../../../../images/profile-pic.png')} alt="" />
          </div>
          <Link to=""><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></Link>
        </div>
        <div className="container sub-details">
          <div className="py-4 d-flex align-items-center justify-content-between">
            <h5 className="font-weight-bold m-0">Your Plan</h5>
            <div className="d-flex align-items-center">
              <div className="d-flex mr-2">
                <img className="mr-2" src={require('../../../../images/swoosh.svg')} alt="" />
                <h5 className="font-weight-bold m-0">Cancel Anytime</h5>
              </div>
              <div className="d-flex ml-2">
                <img className="mr-2" src={require('../../../../images/swoosh.svg')} alt="" />
                <h5 className="font-weight-bold m-0">Refund Guarantee</h5>
              </div>
            </div>
          </div>
          <div className="mb-4">14 days free trial- <span>Ends on the 3rd of August 2020</span></div>
        </div>
        <div className="container px-0">
          <span className="font-weight-bold pl-3">Choose a subscription plan</span>
          <div className="sub-wrap">
            <SubPlanCard
              planName={'Free'}
              planAmount={'0'}
              planDetails={`Limited access to all subjects`}
              planDetails2={'Maximum of 5 topics per subject'}
              planDetails3={'Full access to dashboard'}
            />
            <SubPlanCard
              planName={'Monthly Plan'}
              planAmount={'50'}
              planDetails={`Full access to all subjects`}
              planDetails2={`Unlimited access to quiz section`}
              planDetails3={'Full access to topics per subject'}
              planDetails4={'Full access to dashboard'}
            />
            <SubPlanCard
              planName={'Yearly Plan'}
              planAmount={'550'}
              planDetails={`Full access to all subjects`}
              planDetails2={`Unlimited access to quiz section`}
              planDetails3={'Full access to topics per subject'}
              planDetails4={'Full access to dashboard'}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Subscription