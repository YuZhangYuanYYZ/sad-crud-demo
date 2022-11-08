import './styles.scss';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { deleteAItem } from '../../../../store/actions/deleteItemAction';
import { AppDispatch } from '../../../../store';
export function DeleteButton({ itemId }) {
  const dispatch = useDispatch<AppDispatch>();
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
