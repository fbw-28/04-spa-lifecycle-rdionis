import React from "react";

const Table = ({ id, name, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default Table;
