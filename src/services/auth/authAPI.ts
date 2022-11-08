import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;
const DATA_FORMATE = 'application/json';

const headers = {
  'Content-Type': DATA_FORMATE,
};

export function userLogin({ username, password }) {
  const options = {
    headers,
    method: 'POST',
    data: JSON.stringify({ username, password }),
    url: `${API_BASE}/login/`,
  };
  return axios(options).then((response) => {
    return response;
  });
}

export function userSignUp({ username, password }) {
  return axios.post(`${API_BASE}/signup/`, JSON.stringify({ username, password }), {
    headers: headers,
  });
}
