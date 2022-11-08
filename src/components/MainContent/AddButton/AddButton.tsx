import './styles.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { PopupItem } from '../../common/PopupItem';
import { addItem } from '../../../store/actions/addItemAction';
import { changeGlobalPopupState } from '../../../store/actions/changeGlobalPopupStateAction';
import { State } from '../../../store/reducers/itemReducer';

export function AddButton() {
  const [addItemPopup, setAddItemPopup] = useState(false);
  const dispatch = useDispatch();
  const globalPoputState = useSelector((state: State) => {
    return state.popupState;
  });
  const handleSubmit = (newItem) => {
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
