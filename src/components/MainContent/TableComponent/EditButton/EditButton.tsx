import './styles.scss';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editAItem } from '../../../../store/actions/editItemAction';
import { PopupItem } from '../../../common/PopupItem';
import { useState } from 'react';
import { changeGlobalPopupState } from '../../../../store/actions/changeGlobalPopupStateAction';
import { State } from '../../../../store/actions/itemTypes';
import { AppDispatch } from '../../../../store';

export function EditButton({ currentItem }) {
  const [editItemPopup, setEditItemPopup] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleEitItemSubmit = (item) => {
    dispatch(editAItem(item, currentItem.id));
  };
  const globalPoputState = useSelector((state: State) => {
    return state.popupState;
  });
  const handleEditButtonOnclic = () => {
    if (globalPoputState) {
      setEditItemPopup(false);
    } else {
      setEditItemPopup(true);
      dispatch(changeGlobalPopupState(true));
    }
  };
  return (
    <div className="editButtonContainer">
      <Button variant="success" onClick={handleEditButtonOnclic}>
        Edit
      </Button>
      {editItemPopup ? (
        <PopupItem handleSubmit={handleEitItemSubmit} currentItem={currentItem} setItemPopup={setEditItemPopup} />
      ) : null}
    </div>
  );
}
