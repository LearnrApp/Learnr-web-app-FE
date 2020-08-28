import axios from 'axios'

const LEARNR_API_BASE_URL = 'https://learnr-be.herokuapp.com'
// const LEARNR_API_BASE_URL = 'http://localhost:7000'

export const getCoursesInAClass = async (classId) => {
   const response = await axios({
    method: 'GET',
    url: `${LEARNR_API_BASE_URL}/class/${classId}/course`,
    headers: {
      accept: 'application/json',
    },
  });
   return response;
};

export const getStudentProfile = async (token) => {

  const response = await axios({
    method: 'GET',
    url: `${LEARNR_API_BASE_URL}/students/profile`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
  })
  return response;
}