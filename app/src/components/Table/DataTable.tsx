import React from 'react';
import { Table } from 'react-bootstrap';

interface Props {
  columns: string[];
  children: React.ReactNode;
}

export const DataTable: React.FC<Props> = ({ columns, children }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};
