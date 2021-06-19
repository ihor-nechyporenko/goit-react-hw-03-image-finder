import axios from 'axios';

const KEY = '21256034-530eff5c113cf9ecb9ad1dfd0';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => {
      return response.data.hits;
    });
};

export default { fetchImages };
