import axios from 'axios';
import { getJwtToken } from '../auth/tokenStorage';

const API_BASE = process.env.REACT_APP_API_URL;
const DATA_FORMATE = 'application/json';

const getHeaders = () => {
  const jwtToken = getJwtToken();
  const headersWithToken = {
    'Content-Type': DATA_FORMATE,
    Authorization: `Bearer ${jwtToken}`,
  };
  return headersWithToken;
};

export function getItemFromAPI() {
  return axios.get(`${API_BASE}/items`, { headers: getHeaders() }).then((response) => {
    return response;
  });
}

export function editItemInAPI(newItem, itemId) {
  const jwtToken = getJwtToken();
  const options = {
    headers: getHeaders(),
    method: 'PUT',
    data: JSON.stringify(newItem),
    url: `${API_BASE}/items/${itemId}`,
  };
  return axios(options).then((response) => {
    return response;
  });
}

export function addAItemToAPI(newItem) {
  const options = {
    method: 'POST',
    headers: getHeaders(),
    data: JSON.stringify(newItem),
    url: `${API_BASE}/items`,
  };
  return axios(options).then((response) => {
    return response;
  });
}

export function deleteItemInAPI(itemId) {
  const options = {
    method: 'DELETE',
    headers: getHeaders(),
    url: `${API_BASE}/items/${itemId}`,
  };
  return axios(options).then((response) => {
    return response;
  });
}
