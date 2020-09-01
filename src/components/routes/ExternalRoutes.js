import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from '../../pages/externalPages/Welcome'
import About from '../../pages/externalPages/About/About'
import Contact from '../../pages/externalPages/Contact'
import ResetPassword from '../../pages/ResetPassword/ResetPassword'
import FourZeroFour from '../../pages/externalPages/FourZeroFour'
import StudentSignup from '../../pages/student/StudentSignup'
import StudentSignin from '../../pages/student/StudentSignin'
import ParentSignup from '../../pages/parent/ParentSignup'
import ParentSignin from '../../pages/parent/ParentSignin'
import AdminSignin from '../../pages/admin/AdminSignin'

const WELCOME_PAGE_URL = '/'
const ABOUT_PAGE_URL = '/about'
const CONTACT_PAGE_URL = '/contact'
const RESET_PASSWORD_URL = '/reset-password'
const FOUR_ZERO_FOUR_PAGE_URL = '/404'
const STUDENT_SIGNUP_URL = '/students/signup'
const STUDENT_SIGNIN_URL = '/students/signin'
const PARENT_SIGNUP_URL = '/parents/signup'
const PARENT_SIGNIN_URL = '/parents/signin'
const ADMIN_SIGNIN_URL = '/admin/signin'

export const externalUrl = {
  WELCOME_PAGE_URL,
  ABOUT_PAGE_URL,
  CONTACT_PAGE_URL,
  RESET_PASSWORD_URL,
  FOUR_ZERO_FOUR_PAGE_URL,
  STUDENT_SIGNUP_URL,
  STUDENT_SIGNIN_URL,
  PARENT_SIGNUP_URL,
  PARENT_SIGNIN_URL,
  ADMIN_SIGNIN_URL,
}

export const ExternalRoutes = () => {
  return (
    <Switch>
      <Route exact path={ WELCOME_PAGE_URL } component={ Welcome } />
      <Route exact path={ ABOUT_PAGE_URL } component={ About } />
      <Route exact path={ CONTACT_PAGE_URL } component={ Contact } />
      <Route exact path={ RESET_PASSWORD_URL } component={ ResetPassword } />
      <Route exact path={ FOUR_ZERO_FOUR_PAGE_URL } component={ FourZeroFour } />
      <Route exact path={ STUDENT_SIGNUP_URL } component={ StudentSignup } />
      <Route exact path={ STUDENT_SIGNIN_URL } component={ StudentSignin } />
      <Route exact path={ PARENT_SIGNUP_URL } component={ ParentSignup } />
      <Route exact path={ PARENT_SIGNIN_URL } component={ ParentSignin } />
      <Route exact path={ ADMIN_SIGNIN_URL } component={ AdminSignin } />
    </Switch>
  )
}