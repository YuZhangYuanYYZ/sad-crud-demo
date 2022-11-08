import { addAItemToAPI } from '../../services/items/api';
import { SimpleItem } from './itemTypes';
import { AppDispatch } from '../';
export const ADD_A_ITEM_START = 'ADD_A_ITEM_START';
export const ADD_A_ITEM_SUCCESS = 'ADD_A_ITEM_SUCCESS';
export const ADD_A_ITEM_FAIL = 'ADD_A_ITEM_FAIL ';

export const addAItemStart = () => ({
  type: 'ADD_A_ITEM_START',
});

export const addAItemSuccess = (item) => ({
  type: 'ADD_A_ITEM_SUCCESS',
  payload: {
    item,
  },
});
export const addAItemFail = (error) => ({
  type: 'ADD_A_ITEM_FAIL',
  payload: {
    error,
  },
});

export function addItem(newItem: SimpleItem) {
  return function (dispatch: AppDispatch) {
    dispatch(addAItemStart());
    addAItemToAPI(newItem).then((response: any) => {
      if (response.name === 'AxiosError') {
        dispatch(addAItemFail(response.name));
      } else {
        dispatch(addAItemSuccess(response.data));
      }
    });
  };
}
