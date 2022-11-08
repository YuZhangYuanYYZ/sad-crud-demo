import './styles.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { validateName } from '../../utils/validationUtil';
import { changeGlobalPopupState } from '../../../store/actions/changeGlobalPopupStateAction';

export function PopupItem({ handleSubmit, currentItem, setItemPopup }): JSX.Element {
  const currentItemName = currentItem ? currentItem.name : '';
  const currentItemDescription = currentItem ? currentItem.description : '';
  const [itemName, setItemName] = useState(currentItemName);
  const [itemDescription, setItemDescription] = useState(currentItemDescription);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  function validateAndHandleSubmit(event, setItemPopup) {
    event.preventDefault();
    const validateReult = validateName(itemName);
    //create item only when name is not empty
    if (validateReult) {
      const newItem = {
        name: itemName,
        description: itemDescription,
      };
      handleSubmit(newItem);
      setItemPopup(false);
      dispatch(changeGlobalPopupState(false));
    } else {
      setShowAlert(true);
    }
  }

  const handleCancelButton = (setItemPopup) => {
    setItemPopup(false);
    dispatch(changeGlobalPopupState(false));
  };

  return (
    <div className="modalOverlay">
      <div className="popupModal">
        <form className="formContainer" onSubmit={(event) => validateAndHandleSubmit(event, setItemPopup)}>
          <label className="itemLabel">
            <p className="itemName">Name:</p>
            <input
              className="inputContent"
              type="text"
              defaultValue={itemName}
              placeholder="please input a name"
              onBlur={(event) => {
                const newNameValue = event.target.value;
                setItemName(newNameValue);
              }}
            />
          </label>
          {showAlert ? (
            <Alert key="danger" variant="danger">
              Name field is required!
            </Alert>
          ) : null}
          <label className="itemLabel">
            <p className="itemName">Description:</p>
            <input
              className="inputContent"
              type="text"
              defaultValue={itemDescription}
              placeholder="please input your description"
              onBlur={(event) => {
                const newItemDescription = event.target.value;
                setItemDescription(newItemDescription);
              }}
            />
          </label>
          <div className="cancelSubmitButtons">
            <Button className="cancelBtn" onClick={() => handleCancelButton(setItemPopup)}>
              Cancel
            </Button>
            <input className="submitButton" type="submit" value="Save" />
          </div>
        </form>
      </div>
    </div>
  );
}
