import { Row } from "./Row";
import { Cell } from "./Cell";
import { HeaderCell } from "./HeaderCell";
import React from "react";
import { HeaderRow } from "./HeaderRow";

import "./Table.css";

export const Table = props => {
  const {data, colls} = props;

  return (
    <table className="table Table table-striped table-bordered table-hover">
      <thead className="tableHead">
        <HeaderRow Cell={HeaderCell} colls={colls} />
      </thead>
      <tbody className="tableBody">
        {data.map((item, index) => (
          <Row
            key={item.id}
            index={index}
            Cell={Cell}
            item={item}
            colls={colls}
          />
        ))}
      </tbody>
    </table>
  );
};
