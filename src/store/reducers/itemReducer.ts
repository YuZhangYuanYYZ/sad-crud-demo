import { Item } from './../actions/itemTypes';
import { ADD_A_ITEM_START, ADD_A_ITEM_SUCCESS, ADD_A_ITEM_FAIL } from '../actions/addItemAction';
import { DELETE_ITEM_START, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAIL } from '../actions/deleteItemAction';
import { GET_ITEM_START, GET_ITEM_SUCCESS, GET_ITEM_FAIL } from '../actions/getItemAction';
import { EDIT_ITEM_START, EDIT_ITEM_SUCCESS, EDIT_ITEM_FAIL } from '../actions/editItemAction';
import { CHANGE_POPUP_START } from '../actions/changeGlobalPopupStateAction';

export type State = {
  status: string;
  items: Array<Item>;
  popupState: boolean;
};

const initialState: State = {
  status: 'idle',
  items: [],
  popupState: false,
};

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_A_ITEM_START:
      return { ...state, status: 'loading' };
    case ADD_A_ITEM_SUCCESS:
      return {
        ...state,
        status: 'success',
        items: [...state.items, action.payload.item],
      };
    case ADD_A_ITEM_FAIL:
      return { ...state, status: 'fail' };
    case GET_ITEM_START:
      return { ...state, status: 'loading' };
    case GET_ITEM_SUCCESS:
      return { ...state, status: 'success', items: action.payload };
    case GET_ITEM_FAIL:
      return { ...state, status: 'fail' };
    case DELETE_ITEM_START:
      return { ...state, status: 'loading' };
    case DELETE_ITEM_SUCCESS:
      const latestItems = state.items.filter((item) => item.id !== action.payload.itemId);
      return {
        ...state,
        status: 'success',
        items: latestItems,
      };
    case DELETE_ITEM_FAIL:
      return { ...state, status: 'fail' };
    case EDIT_ITEM_START:
      return { ...state, status: 'loading' };
    case EDIT_ITEM_SUCCESS:
      const newItems = state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          return action.payload.updatedItem;
        } else {
          return item;
        }
      });
      return {
        ...state,
        status: 'success',
        items: newItems,
      };
    case EDIT_ITEM_FAIL:
      return { ...state, status: 'fail' };
    case CHANGE_POPUP_START:
      return { ...state, popupState: action.payload };
    default:
      return state;
  }
}
