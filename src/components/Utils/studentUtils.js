import axios from 'axios'

const LEARNR_API_BASE_URL = 'https://learnr-be.herokuapp.com'
const LEARNR_API_BASE_UR = 'http://localhost:7000'

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