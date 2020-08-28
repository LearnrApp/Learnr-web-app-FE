import React, {useEffect, useState} from 'react'
import Helmet from 'react-helmet'
import {Link} from  'react-router-dom'
import ProfileItem from  './ProfileItem'
import ProfileItemV2 from  './ProfileItemV2'
import {Modal} from 'react-bootstrap'
// import { getStudentProfile } from "../../../Utils/studentUtils";
import '../../../../styles/UserDashboard.css'


const Profile = () => {
  const documentTitle = 'Learnr | Student Dashboard-Profile'

  const [photoModal, showPhotoModal] = useState(false)
  const [infoModal, showInfoModal] = useState(false)

  // useEffect(() => {
  //   studentProfile()
  // }, [])
  // const studentToken = localStorage.getItem('learnrStudentToken')
  //
  // const studentProfile = () => {
  //   getStudentProfile(studentToken)
  //     .then(response => {
  //       localStorage.setItem('studentProfile', JSON.stringify(response.data.student))
  //     }
  //   )
  // }
  const studentData = JSON.parse(localStorage.getItem('studentProfile'))

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="The Profile section of the student dashboard."
        />
      </Helmet>

      <div className="main--wrap">
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >{studentData.fullName}</span>
            <img className="mx-3" src={require('../../../../images/profile-pic.png')} alt="" />
          </div>
          <Link to=""><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></Link>
        </div>
        <div className="d-flex my-4 flex-column mx-auto">
          <div className="text-center d-flex flex-column">
            <img className="mx-auto" src={require('../../../../images/profile-pic.png')} alt="" />
            <span onClick={() => showPhotoModal(true)} className="upload-photo mx-auto">Edit Photo</span>
          </div>
          <span className="mt-4 text-center">
            {studentData.username}
          </span>
          <span className="mt-2 text-center">Manage your information and security</span>
        </div>
        <div className="mx-auto container pb-5">
          <div className="profile-items--wrap">
            <h5 className="font-weight-bolder profile-items--title">Personal Information</h5>
            <ProfileItem
              keys={'Full Name'}
              value={studentData.fullName}
              edit={'Edit'}
              // editSection={showPhotoModal(true)}
            />
            <ProfileItemV2
              keys={'Username'}
              value={studentData.username}
              edit={'Edit'}
            />
            <ProfileItemV2
              keys={'Class'}
              value={studentData.classSelect}
              edit={'Edit'}
            />
            <ProfileItemV2
              keys={'Gender'}
              value={'Male'}
              edit={'Edit'}
            />
            <ProfileItem
              keys={'Password'}
              value={'********'}
              edit={'Edit'}
              editSection={'e'}
            />
          </div>
          <div className="profile-items--wrap mt-4">
            <h5 className="font-weight-bolder profile-items--title">Contact Information</h5>
            <ProfileItem
              keys={'Parent or Guardian’s Email Address'}
              value={studentData.parentEmail}
              edit={'Edit'}
              editSection={'e'}
            />
            <ProfileItem
              keys={'Phone Number'}
              value={'Nil'}
              edit={'Edit'}
              editSection={'e'}
            />
          </div>
          <div className="mt-4">
          <h5 className="font-weight-bolder profile-items--title">Connections</h5>
            <div className="profile-items row border-bottom bg-white">
              <div className="">
                <img className="" src={require('../../../../images/facebook-blue.svg')} alt="" />
                <span className="font-weight-bold ml-2" style={{color: '#212429'}}>Connect to Facebook</span>
              </div>
              <Link to="" className="col text-right"
                style={{color: '#2342C0'}}
              >Connect</Link>
            </div>
          </div>
        </div>

        <>
          <Modal
          show={photoModal}
          onHide={() => showPhotoModal(false)}
          centered
          >
            {/* <Modal.Body className="d-flex flex-column justify-content-center"> */}
            <form action="" className="mx-auto my-3 d-flex flex-column">
            <div class="modal-box d-flex fex-column align-items-center justify-content-center">
              <input type="file" name="file-photo[]" id="file-photo" class="d-none inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple />
              <label for="file-photo">
                <figure><img className="" src={require('../../../../images/Upload.svg')} alt="" /></figure>
                <h5 className="text-center">Upload Photo&hellip;</h5>
              </label>
            </div>
            <span className="text-center">Drag & Drop to upload or click icon to select file</span>
            <input type="submit" value="Upload" className="upload-btn" />
          </form>
            {/* </Modal.Body> */}
          </Modal>
        </>
      
         <>
          <Modal
          show={infoModal}
          onHide={() => showInfoModal(false)}
          dialogClassName="modal-60w"
          centered
          >
            <Modal.Body className="d-flex flex-column justify-content-center">
              <img className="" src={require('../../../../images/Upload.svg')} alt="" />
              <h5 className="text-center">Upload Photo</h5>
              <span className="text-center">Drag & Drop to upload or</span>
              <form action="" className="mx-auto my-3 d-flex flex-column">
                <input type="file" id="myFile" name="filename" className="upload-input w-100" />
                <input type="submit" value="Upload" className="upload-btn" />
              </form>
            </Modal.Body>
          </Modal>
        </>
      </div>
    </React.Fragment>
  )
}

export default Profile