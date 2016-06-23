import React from 'react';
import { Table } from 'react-bootstrap';
// const {Table, Column, Cell} = require('fixed-data-table');

// class MyTextCell extends React.Component{
//     render(){
//         const {rowIndex, field, data, ...props} = this.props;
//         return(
//             <Cell {...props}>
//                 {data[rowIndex][field]}
//             </Cell>
//         )
//     }
// }

// class MyLinkCell extends React.Component{
//     render(){
//         const {rowIndex, field, data, ...props} = this.props;
//         const link = data[rowIndex][field];
//         return(
//             <Cell {...props}>
//                 <a href={link}>{link}</a>
//             </Cell>
//         )
//     }
// }

// const myTableData = [
//             {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
//             {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
//             {name: 'Estevan', email: 'Aimee7@hotmail.com'},
//             {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
//             {name: 'Tressa', email: 'Yadira1@hotmail.com'},
//           ]
//         ;

const pls = [
  {
    ponumber: 186296,
    plnumber: '000123',
    dateSubmitted: '8-May-12',
    mot: 'Sea',
    failed: false,
    veliLabel: '',
    inboundDoc: '',
  },
  {
    ponumber: 186296,
    plnumber: '000124',
    dateSubmitted: '9-May-12',
    mot: 'Sea',
    failed: true,
    veliLabel: '',
    inboundDoc: 'X',
  },
  {
    ponumber: 186297,
    plnumber: '000125',
    dateSubmitted: '10-May-12',
    mot: 'Sea',
    failed: false,
    veliLabel: 'X',
    inboundDoc: '',
  },
  {
    ponumber: 186297,
    plnumber: '000126',
    dateSubmitted: '11-May-12',
    mot: 'Sea',
    failed: true,
    veliLabel: 'X',
    inboundDoc: 'X',
  },
];

const rows = pls.map((pl) => (
  <tr>
    <td>{pl.ponumber}</td>
    <td>{pl.plnumber}</td>
    <td>{pl.dateSubmitted}</td>
    <td>{pl.mot}</td>
    <td>{pl.failed && <a href>Download</a>}{!pl.failed && 'Processing'}</td>
    <td>{pl.veliLabel && <a href>Download</a>}{!pl.veliLabel && 'Processing'}</td>
    <td>{pl.inboundDoc && <a href>View</a>}</td>
  </tr>
));

const RecentInboundDeliveriesTable = () => (
  // constructor(props) {
  // super(props);

  // this.state = {
  //     myTableData: [
  //         {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
  //         {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
  //         {name: 'Estevan', email: 'Aimee7@hotmail.com'},
  //         {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
  //         {name: 'Tressa', email: 'Yadira1@hotmail.com'},
  //       ],
  //     };
  // }
  <div className="col-sm-12">
    <Table striped hover>
      <colgroup>
        <col width="14%" />
        <col width="14%" />
        <col width="15%" />
        <col width="14%" />
        <col width="15%" />
        <col width="14%" />
        <col width="14%" />
      </colgroup>
      <thead>
        <tr>
          <th>PO Number</th>
          <th>PL Number/s</th>
          <th>Date Submitted</th>
          <th>MOT</th>
          <th>Failed</th>
          <th>Veli Label</th>
          <th>Inbound Doc</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  </div>
);

export default RecentInboundDeliveriesTable;


// <Table
//     rowsCount={this.state.myTableData.length}
//     rowHeight={50}
//     headerHeight={50}
//     width={1000}
//     height={500}>
//     <Column
//         header={<Cell>Name</Cell>}
//         cell={
//             <MyTextCell
//                 data={this.state.myTableData}
//                 field="name"
//             />
//         }
//         width={200}
//     />
//     <Column
//         header={<Cell>Email</Cell>}
//         cell={
//             <MyLinkCell
//                 data={this.state.myTableData}
//                 field="email"
//             />
//         }
//         width={200}
//     />
// </Table>
