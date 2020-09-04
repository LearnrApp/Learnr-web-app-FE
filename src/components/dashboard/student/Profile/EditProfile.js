import React, { Fragment, useRef, useState, useEffect } from 'react'
import {Alert} from 'reactstrap' 
import { getStudentProfile, updateProfile } from '../../../Utils/StudentUtils'
import { studentsUrl } from '../../../routes/StudentRoutes'
import '../../../../styles/UserDashboard.css'

const EditProfile = () => {
  const fullName = useRef()
  const username = useRef()
  const gender = useRef()
  const parentEmail = useRef()
  const phone = useRef()
  const spinner = useRef()

  const [invisibleAlert, visibleAlert] = useState(false)

  useEffect(() => {
    spinner.current.classList.remove('spinner-border')

  }, [])

  return(
    <Fragment>
      <form className="mx-auto w-50 pt-5">
        <div className="form-group">
          <label className="small font-weight-bold" htmlFor="fullName">Full Name</label>
          <input ref={fullName} type="text" className="form-control-sm form-control" id="fullName" placeholder="Full Name" />
        </div>
        <div className="form-group">
          <label className="small font-weight-bold" htmlFor="username">Username</label>
          <input ref={username} type="text" className="form-control-sm form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label className="small font-weight-bold" htmlFor="gender">Gender</label>
          <select ref={gender} id="gender" className="form-control-sm form-control">
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        <div className="form-group">
          <label className="small font-weight-bold" htmlFor="parentEmail">Parent or Gaurdian's Email Address</label>
          <input ref={parentEmail} type="email" className="form-control-sm form-control" id="parentEmail" placeholder="Parent or Guardian's Email" />
        </div>
        <div className="form-group">
          <label className="small font-weight-bold" htmlFor="phone">Phone Number</label>
          <input ref={phone} type="phone" className="form-control-sm form-control" id="phone" placeholder="Phone Number" />
        </div>
        <Alert className="small" isOpen={invisibleAlert} color="success">
          Profile Updated!
        </Alert>
        <div className="form-group d-flex align-items-center">
          <div ref={spinner} className="spinner-border mr-3" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <input onClick={(e) => {
            e.preventDefault()
            spinner.current.classList.add('spinner-border')

            const studentFullName = fullName.current.value
            const studentUsername = username.current.value
            const studentGender = gender.current.value
            const studentParentEmail = parentEmail.current.value
            const studentPhone = phone.current.value

            const data = {
              fullName: studentFullName,
              username: studentUsername,
              gender: studentGender,
              parentEmail: studentParentEmail,
              phone: studentPhone
            }
            if(data.fullName === '') {
              delete data.fullName
            }
            if(data.username === '') {
              delete data.username
            }
            if(data.parentEmail === '') {
              delete data.parentEmail
            }
            if(data.phone === '') {
              delete data.phone
            }
            console.log(data)
            updateProfile(data)
            .then(res => {
              console.log(res)
              if(res.data.status === 'success') {
                getStudentProfile()
                .then(res => {
                  if(res.data.status === 'success') {
                    console.log(res)
                    visibleAlert(true)
                    localStorage.setItem('learnrStudentProfile', JSON.stringify(res.data.data.student))
                    spinner.current.classList.remove('spinner-border')
                    setTimeout(() => {
                      window.location.replace(studentsUrl.STUDENT_DASHBOARD_PROFILE_URL)
                    }, 2000)
                  }
                })
              }
            })
            .catch(err => console.log(err))
          }} type="submit" className="upload-btn" value="Update..." />
        </div>
      </form>
    </Fragment>
  )
}

export default EditProfile