import axios from 'axios';

const API_KEY = '21256034-530eff5c113cf9ecb9ad1dfd0';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    q: searchQuery,
    page: currentPage,
    per_page: pageSize,
    key: API_KEY,
  });

  return axios.get(`${BASE_URL}?${searchParams}`).then(response => {
    return response.data.hits;
  });
};

export default { fetchImages };
