import { deleteItemInAPI } from '../../services/items/api';
import { AppDispatch } from '../';
export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAIL = 'DELETE_ITEM_FAIL ';

export const deleteItemStart = () => ({
  type: 'DELETE_ITEM_START',
});

export const deleteItemSuccess = (itemId) => ({
  type: 'DELETE_ITEM_SUCCESS',
  payload: {
    itemId: itemId,
  },
});
export const deleteItemFail = (error) => ({
  type: 'DELETE_ITEM_FAIL',
  payload: {
    error,
  },
});

export function deleteAItem(itemId): any {
  return function (dispatch: AppDispatch) {
    dispatch(deleteItemStart());
    deleteItemInAPI(itemId).then((response: any) => {
      if (response.name === 'AxiosError') {
        dispatch(deleteItemFail(response.name));
      } else {
        dispatch(deleteItemSuccess(itemId));
      }
    });
  };
}
