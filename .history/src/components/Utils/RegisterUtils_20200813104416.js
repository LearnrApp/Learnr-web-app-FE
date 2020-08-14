import axios from 'axios'
// import dotenv from 'dotenv'

export const StudentRegister = async (studentData, id) => {
  const response = await axios ({
    method: 'POST',
    // url: `https://learnr-be.herokuapp.com/students/register/${id}`,
    url: `http://localhost:3000/students/register/${id}`,
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