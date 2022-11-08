import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableComponent } from './TableComponent';
import { AddButton } from './AddButton';
import { getItemsList } from '../../store/actions/getItemAction';
import { State } from '../../store/actions/itemTypes';
import { AppDispatch } from '../../store';

export function MainContent() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: State) => {
    return state.items;
  });
  useEffect(() => {
    dispatch(getItemsList());
  }, [dispatch]);

  return (
    <div className="mainContent">
      {items && items.length > 0 && (
        <>
          <AddButton></AddButton>
          <TableComponent items={items} />
        </>
      )}
    </div>
  );
}
