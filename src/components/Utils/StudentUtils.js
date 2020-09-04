import axios from 'axios'

const LEARNR_API_BASE_URL = 'https://learnr-be.herokuapp.com'
// const LEARNR_API_BASE_URL = 'http://localhost:7000'

export const getStudentProfile = async () => {
  const studentToken = localStorage.getItem('learnrToken')
  console.log(studentToken)
  const response = await axios({
    method: 'GET',
    url: `${LEARNR_API_BASE_URL}/students/profile`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${studentToken}`
    },
  })
  
  return response;
}

export const getCoursesInAClass = async () => {
  const studentData = JSON.parse(localStorage.getItem('learnrStudentProfile'))
  console.log(studentData)
  const currentClass = studentData.class
  console.log(currentClass)
  const response = await axios({
    method: 'GET',
    url: `${LEARNR_API_BASE_URL}/class/${currentClass}/course`,
    headers: {
      accept: 'application/json',
    },
  })
  
  return response;
}

export const getArticlesInCourses = (courseId) => {
  const response = axios({
    method: 'GET',
    url: `${LEARNR_API_BASE_URL}/class/${courseId}/article`,
    headers: {
      accept: 'application/json'
    }
  })

  return response
}

export const updateProfileImage = async (profileImage) => {
  const studentData = JSON.parse(localStorage.getItem('learnrStudentProfile'))
  console.log(profileImage)
  const studentId = studentData._id
  const response = await axios({
    method: 'PATCH',
    url: `${LEARNR_API_BASE_URL}/students/profile/update/photo/${studentId}`,
    // Authorization: `Bearer ${studentToken}`,
    data: profileImage
  })

  return response
}

export const updateProfile = async (profileData) => {
  const studentData = JSON.parse(localStorage.getItem('learnrStudentProfile'))
  const studentId = studentData._id
  
  const response = await axios({
    method: 'PATCH',
    url: `${LEARNR_API_BASE_URL}/students/profile/update/${studentId}`,
    // Authorization: `Bearer ${studentToken}`,
    data: profileData
  })

  return response
}