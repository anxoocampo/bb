import React from 'react';
import { Table } from 'react-bootstrap';

const items = [
  {
    itemLine: '00010',
    matNo: 3755534,
    description: 'W:FRO68009:AALJO:69700',
    coo: 'CN',
    cc: 'IT',
    mot: 'Standard',
    totalOrder: 5,
    openQuantity: 5,
    size: 'XS',
    plQuantity: 0,
  },
  {
    itemLine: '00010',
    matNo: 3755535,
    description: 'W:FRO68009:AALJO:69700',
    coo: 'CN',
    cc: 'IT',
    mot: 'Standard',
    totalOrder: 5,
    openQuantity: 5,
    size: 'M',
    plQuantity: 0,
  },
  {
    itemLine: '00010',
    matNo: 3755536,
    description: 'W:FRO68009:AALJO:69700',
    coo: 'CN',
    cc: 'IT',
    mot: 'Standard',
    totalOrder: 5,
    openQuantity: 5,
    size: 'L',
    plQuantity: 0,
  },
];

const rows = items.map((item) => (
  <tr>
    <td>{item.itemLine}</td>
    <td>{item.matNo}</td>
    <td>{item.description}</td>
    <td>{item.coo}</td>
    <td>{item.cc}</td>
    <td>{item.mot}</td>
    <td>{item.totalOrder}</td>
    <td>{item.openQuantity}</td>
    <td>{item.size}</td>
    <td><input type="text" name="plQuantity" className="form-control" value={item.plQuantity} /></td>
  </tr>
));

const Items = () => (
  <div className="col-sm-12 panel">
    <h3>Quantity in each individual box</h3>
    <div className="col-sm-2">
      <input type="text" name="filterByItemLine" className="form-control" placeholder="Filter by Item Line" />
    </div>
    <div className="col-sm-2">
      <input type="text" name="filterByMatNo" className="form-control" placeholder="Filter by Mat No" />
    </div>
    <div className="col-sm-2">
      Select country of origin
    </div>
    <div className="col-sm-2">
      Select Collection Country
    </div>
    <div className="col-sm-2">
      <input type="text" name="filterBySize" className="form-control" placeholder="Filter by Size" />
    </div>
    <div className="col-sm-2">
      <a href >Reset Filter</a>
    </div>
    <div className="col-sm-12"></div>
    <Table striped hover>
      <colgroup>
        <col width="8%" />
        <col width="8%" />
        <col width="24%" />
        <col width="8%" />
        <col width="8%" />
        <col width="8%" />
        <col width="8%" />
        <col width="8%" />
        <col width="8%" />
        <col width="8%" />
      </colgroup>
      <thead>
        <tr>
          <th>Item Line</th>
          <th>Mat No.</th>
          <th>Description</th>
          <th>Country of Origin</th>
          <th>Collection Country</th>
          <th>MOT</th>
          <th>Total Order</th>
          <th>Open Quantity</th>
          <th>Size</th>
          <th>PL Quantity</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  </div>
);

export default Items;
