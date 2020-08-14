import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
const LEARNR_API_BASE_UR = 'https://learnr-be.herokuapp.com'
const LEARNR_API_BASE_URL = 'http://localhost:7000'

export const StudentRegister = async (studentData, id) => {
  const response = await axios ({
    method: 'POST',
    url: `${LEARNR_API_BASE_URL}/students/register/${id}`,
    data: studentData
  })

  return response
}

export const StudentLogin = async (studentData) => {
  const response = await axios ({
    method: 'POST',
    url: 'https://learnr-be.herokuapp.com/students/login',
    data: studentData
  })

  return response
}

export const ParentRegister = async (parentData) => {
  const response = await axios ({
    method: 'POST',
    url: 'https://learnr-be.herokuapp.com/parents/register',
    data: parentData
  })

  return response
}

export const ParentLogin = async (parentData) => {
  const response = await axios ({
    method: 'POST',
    url: 'https://learnr-be.herokuapp.com/parents/login',
    data: parentData
  })

  return response
}