import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableComponent } from './TableComponent';
import { AddButton } from './AddButton';
import { getItemsList } from '../../store/actions/getItemAction';

export function MainContent() {
  const dispatch = useDispatch();
  let items = useSelector((state) => {
    return state.items;
  });
  useEffect(() => {
    dispatch(getItemsList());
  }, [dispatch]);

  return (
    <div className="mainContent">
      {items && items.length > 0 && (
        <>
          <AddButton items={items}></AddButton>
          <TableComponent items={items} />
        </>
      )}
    </div>
  );
}
