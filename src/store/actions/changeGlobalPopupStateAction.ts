export const CHANGE_POPUP_START = 'CHANGE_POPUP_START';

export const changeGlobalPopupState = (popupState) => ({
  type: 'CHANGE_POPUP_START',
  payload: popupState,
});
