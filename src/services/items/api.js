import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;
const DATA_FORMATE = 'application/json';
export function getItemFromAPI() {
  return axios.get(`${API_BASE}/items`).then((response) => {
    return response;
  });
}
const headers = {
  'Content-Type': DATA_FORMATE,
};

export function editItemInAPI(newItem, itemId) {
  const options = {
    headers,
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
    headers: {
      'Content-Type': DATA_FORMATE,
    },
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
    headers: {
      'Content-Type': DATA_FORMATE,
    },
    url: `${API_BASE}/items/${itemId}`,
  };
  return axios(options).then((response) => {
    return response;
  });
}

let a = [1, 2, 3];
let b = [3, 2, 1];

function compareTriplets(a, b) {
  let A = 0;
  let B = 0;
  const c = Array.from(a);
  const d = Array.from(b);
  console.log(c, d, 'c,d');
  for (let i = 0; i < a.length; i++) {
    if (c[i] > d[i]) {
      A = A + 1;
    } else if (c[i] < d[i]) {
      B = B + 1;
    }
  }
  return [A, B];
}

compareTriplets(a, b);
