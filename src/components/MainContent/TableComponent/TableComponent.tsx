import './styles.scss';
import Table from 'react-bootstrap/Table';
import { DeleteButton } from './DeleteButton';
import { EditButton } from './EditButton';

export function TableComponent({ items }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.name}</th>
                <td>{item.description}</td>
                <td className="editDeleteButtons">
                  <EditButton currentItem={item}></EditButton>
                  <DeleteButton itemId={item.id}></DeleteButton>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
