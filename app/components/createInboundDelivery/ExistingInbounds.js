import React from 'react';
import { Table } from 'react-bootstrap';

const existingInbounds = [
  {
    plnumber: '000123',
    dateSubmitted: '8-May-12',
    failed: false,
    veliLabel: '',
    inboundDoc: '',
    plSummary: '',
  },
  {

    plnumber: '000124',
    dateSubmitted: '9-May-12',
    failed: true,
    veliLabel: '',
    inboundDoc: 'X',
    plSummary: 'X',
  },
  {

    plnumber: '000125',
    dateSubmitted: '10-May-12',
    failed: false,
    veliLabel: 'X',
    inboundDoc: '',
    plSummary: '',
  },
  {
    plnumber: '000126',
    dateSubmitted: '11-May-12',
    failed: true,
    veliLabel: 'X',
    inboundDoc: 'X',
    plSummary: '',
  },
];

const rows = existingInbounds.map((inbound) => (
  <tr>
    <td>{inbound.plnumber}</td>
    <td>{inbound.dateSubmitted}</td>
    <td>{inbound.failed && <a href>Download</a>}{!inbound.failed && 'Processing'}</td>
    <td>{inbound.veliLabel && <a href>Download</a>}{!inbound.veliLabel && 'Processing'}</td>
    <td>{inbound.inboundDoc && <a href>Download</a>}{!inbound.inboundDoc && 'Processing'}</td>
    <td>{inbound.plSummary && <a href>View</a>}</td>
  </tr>
));

const ExistingInbounds = () => (
  <div className="panel col-sm-12">
    <h3>Existing Inbound Deliveries</h3>
    <Table striped hover>
      <colgroup>
        <col width="15%" />
        <col width="15%" />
        <col width="15%" />
        <col width="20%" />
        <col width="15%" />
        <col width="20%" />
        <col width="15%" />
      </colgroup>
      <thead>
        <tr>
          <th>PL Number/s</th>
          <th>Date Submitted</th>
          <th>Failed</th>
          <th>Veli Label</th>
          <th>Inbound Doc</th>
          <th>PL Summary</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  </div>
);

export default ExistingInbounds;
