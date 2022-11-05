import { editItemInAPI } from '../../services/items/api';

export const EDIT_ITEM_START = 'EDIT_ITEM_START';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAIL = 'EDIT_ITEM_FAIL ';

export const editItemStart = () => ({
  type: 'EDIT_ITEM_START',
});

export const editItemSuccess = (updatedItem, itemId) => ({
  type: 'EDIT_ITEM_SUCCESS',
  payload: {
    updatedItem,
    itemId,
  },
});
export const editItemFail = (error) => ({
  type: 'EDIT_ITEM_FAIL',
  payload: {
    error,
  },
});

export function editAItem(item, itemId) {
  return function (dispatch) {
    dispatch(editItemStart());
    editItemInAPI(item, itemId).then((response) => {
      if (response.name === 'AxiosError') {
        dispatch(editItemFail(response.name));
      } else {
        dispatch(editItemSuccess(response.data, itemId));
      }
    });
  };
}
