import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios' 
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { Modal, ModalBody } from 'reactstrap';
import ProfileItem from  './ProfileItem'
import ProfileItemV2 from  './ProfileItemV2'
import { getStudentProfile, updateProfileImage } from "../../../Utils/StudentUtils";
import '../../../../styles/UserDashboard.css'


const Profile = () => {
  const photoInput = useRef()
  const photoInputText = useRef()
  const uploadButton = useRef()

  const documentTitle = 'Learnr | Student Dashboard-Profile'

  const studentData = JSON.parse(localStorage.getItem('learnrStudentProfile'))

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [photoModal, showPhotoModal] = useState(false)
  const photoToggle = () => showPhotoModal(!photoModal)

  const [profilePic, updateProfilePic] = useState(studentData.photo)
  const [image, setImage] = useState(require('../../../../images/Upload.svg'))

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
            <img className="mx-3 upload-image" src={profilePic} alt="" />
          </div>
          <div onClick={() => toggle()}><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></div>
        </div>
        <div className="d-flex my-4 flex-column mx-auto">
          <div className="text-center d-flex flex-column">
            <img className="mx-auto upload-image" src={profilePic} alt="" />
            <span onClick={() => photoToggle()} className="upload-photo mx-auto">Edit Photo</span>
          </div>
          <span style={{textTransform: 'capitalize'}} className="mt-4 text-center">
            {studentData.username}
          </span>
          <span className="mt-2 text-center">Manage your information and security</span>
        </div>
        <div className="mx-auto container pb-5">
          <div className="profile-items--wrap">
            <h5 className="font-weight-bolder profile-items--title">Personal Information</h5>
            <div className="profile-items row border-bottom bg-white">
              <span className="col " style={{color: '#8B90A0'}}>Full Name</span>
              <span className="col text-break font-weight-bold" style={{color: '#212429'}}>{studentData.fullName}</span>
              <Link className="col text-right"
                to=''
                style={{color: '#2342C0', cursor: 'pointer'}}
              >Edit Profile</Link>
            </div>
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
              value={studentData.gender}
              edit={'Edit'}
            />
            <ProfileItem
              keys={'Password'}
              value={'********'}
              // edit={'Edit'}
            />
          </div>
          <div className="profile-items--wrap mt-4 mb-5">
            <h5 className="font-weight-bolder profile-items--title">Contact Information</h5>
            <ProfileItemV2
              keys={'Parent or Guardian’s Email Address'}
              value={studentData.parentEmail}
              // edit={'Edit'}
              // editSection={'e'}
            />
            <ProfileItemV2
              keys={'Phone Number'}
              value={studentData.phone}
              // edit={'Edit'}
              // editSection={'e'}
            />
          </div>
          {/* <div className="mt-4">
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
          </div> */}
        </div>
      </div>
      <Modal centered={true} isOpen={modal} toggle={toggle}>
          {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
          <ModalBody className="mx-auto p-5">
            <span className="small text-center d-block mb-3">
              Are you sure?
            </span>
            <div className="">
              <span onClick={() => {
                localStorage.clear()
                window.open('/students/signin', '_self')
              }} style={{
                backgroundColor: '#C02342',
                color: '#FFFFFF',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.8rem',
                padding: '5px 10px',
                margin: '20px 10px',
                cursor: 'pointer'
              }}>Logout</span>
              <span onClick={toggle} style={{
                backgroundColor: '#2342C0',
                color: '#FFFFFF',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.8rem',
                padding: '5px 10px',
                margin: '20px 10px',
                cursor: 'pointer'
              }}>Cancel</span>
            </div>
          </ModalBody>
      </Modal>
    
      <Modal isOpen={photoModal} toggle={photoToggle}>
        <ModalBody className="mx-auto p-5">
          <form action="" className="mx-auto my-3 d-flex flex-column">
            <div className="modal-box d-flex fex-column align-items-center justify-content-center">
              <input ref={photoInput} onChange={(e) => {
                console.log(photoInput.current.value)
                console.log(e.target.files[0].name)
                photoInputText.current.innerText = e.target.files[0].name
                const imageFile = e.target.files[0]
                const formData = new FormData()
                formData.append('file', imageFile)
                formData.append('upload_preset', 'learnr_upload')
                axios.post('https://api.cloudinary.com/v1_1/iykeoyiih/image/upload', formData)
                .then(res => {
                  setImage(res.data.secure_url)
                  console.log(res.data.url)
                  const profileImageUrl = {
                    image: res.data.url
                  }
                  localStorage.setItem('learnrUploadImage', JSON.stringify(profileImageUrl))
                  uploadButton.current.classList.remove('d-none')
                })
                .catch(err => console.log(err))
              }} type="file" name="file-photo[]" id="file-photo" className="d-none inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple />
              <label htmlFor="file-photo">
                <figure><img className="upload-image--cloud mx-auto" src={image} alt="" /></figure>
                <h5 ref={photoInputText} className="text-center">Upload Photo&hellip;</h5>
              </label>
            </div>
            <span className="text-center">Click icon to select file</span>
            <input ref={uploadButton} onClick={(e) => {
              e.preventDefault()

              const img = JSON.parse(localStorage.getItem('learnrUploadImage'))
              console.log(img)
              const imageData = {
                photo: img.image
              }
              console.log(imageData)
              updateProfileImage(imageData)
              .then(res => {
                console.log(res)
                getStudentProfile()
                .then(res => {
                  if(res.data.status === 'success') {
                    console.log(res.data.status)
                    localStorage.setItem('learnrStudentProfile', JSON.stringify(res.data.data.student))
                    const newProfilePhoto = JSON.parse(localStorage.getItem('learnrStudentProfile'))
                    photoInputText.current.innerText = 'Profile photo updated!'
                    updateProfilePic(newProfilePhoto.photo)
                  }
                })
              })
            }} type="submit" value="Upload" className="upload-btn d-none" />
          </form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default Profile