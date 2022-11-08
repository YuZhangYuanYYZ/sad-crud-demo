import './styles.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { PopupItem } from '../../common/PopupItem';
import { addItem } from '../../../store/actions/addItemAction';
import { changeGlobalPopupState } from '../../../store/actions/changeGlobalPopupStateAction';
import { State } from '../../../store/actions/itemTypes';
import { SimpleItem } from '../../../store/actions/itemTypes';
import { AppDispatch } from '../../../store';

export function AddButton() {
  const [addItemPopup, setAddItemPopup] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const globalPoputState = useSelector((state: State) => {
    return state.popupState;
  });
  const handleSubmit = (newItem: SimpleItem) => {
    dispatch(addItem(newItem));
  };

  const handleButtonClick = () => {
    if (globalPoputState) {
      setAddItemPopup(false);
    } else {
      setAddItemPopup(true);
      dispatch(changeGlobalPopupState(true));
    }
  };

  return (
    <div className="buttonContainer">
      <Button className="addButton" variant="success" onClick={handleButtonClick}>
        Add
      </Button>
      {addItemPopup ? <PopupItem handleSubmit={handleSubmit} setItemPopup={setAddItemPopup} /> : null}
    </div>
  );
}
