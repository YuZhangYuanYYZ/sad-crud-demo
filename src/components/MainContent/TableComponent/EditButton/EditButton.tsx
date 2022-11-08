import './styles.scss';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editAItem } from '../../../../store/actions/editItemAction';
import { PopupItem } from '../../../common/PopupItem';
import { useState } from 'react';
import { changeGlobalPopupState } from '../../../../store/actions/changeGlobalPopupStateAction';
import { State } from '../../../../store/reducers/itemReducer';

export function EditButton({ items, currentItem }) {
  const [editItemPopup, setEditItemPopup] = useState(false);
  const dispatch = useDispatch();
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
        <PopupItem
          items={items}
          handleSubmit={handleEitItemSubmit}
          currentItem={currentItem}
          setItemPopup={setEditItemPopup}
        />
      ) : null}
    </div>
  );
}
