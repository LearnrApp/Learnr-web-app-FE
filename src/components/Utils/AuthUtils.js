import axios from 'axios'

const LEARNR_API_BASE_URL = 'https://learnr-be.herokuapp.com'
// const LEARNR_API_BASE_URL = 'http://localhost:7000'

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

export function clearUserToken() {
  try {
    localStorage.clear();
  } catch (e) {
    return null;
  }
}

export default function getCurrentUser() {
  try {
    const learnrToken = localStorage.getItem('learnrToken');
    return JSON.parse(atob(learnrToken.split('.')[1]));
  } catch (e) {
    return null;
  }
}