import { getItemFromAPI } from '../../services/items/api';

export const GET_ITEM_START = 'GET_ITEM_START ';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAIL = 'GET_ITEM_FAIL ';

export const getItemStart = () => ({
  type: 'GET_ITEM_START',
});

export const getItemSuccess = (items) => ({
  type: 'GET_ITEM_SUCCESS',
  payload: items,
});
export const getItemFail = (error) => ({
  type: 'GET_ITEM_FAIL',
  payload: {
    error,
  },
});

export function getItemsList() {
  return function (dispatch) {
    dispatch(getItemStart());
    getItemFromAPI().then((response) => {
      if (response.name === 'AxiosError') {
        dispatch(getItemFail(response.name));
      } else {
        dispatch(getItemSuccess(response.data));
      }
    });
  };
}
