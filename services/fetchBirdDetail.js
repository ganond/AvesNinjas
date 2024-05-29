import axios from 'axios';

const fetchBirdDetail = async (uid) => {
  try {
    const response = await axios.get(`https://aves.ninjas.cl/api/birds/${uid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bird detail:', error);
    return null;
  }
};

export default fetchBirdDetail;
