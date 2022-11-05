import './styles.scss';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { deleteAItem } from '../../../../store/actions/deleteItemAction';
export function DeleteButton({ itemId }) {
  const dispatch = useDispatch();
  return (
    <Button
      variant="success"
      onClick={() => {
        dispatch(deleteAItem(itemId));
      }}
    >
      Delete
    </Button>
  );
}
