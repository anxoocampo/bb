import React from 'react';
import FilterByPOorPL from './FilterByPOorPL';
const DatePicker = require('react-datepicker');
require('react-datepicker/dist/react-datepicker.css');
// var moment = require('moment');
import RecentInboundDeliveriesTable from './RecentInboundDeliveriesTable';

const RecentInboundDeliveries = () => (
  // getInitialState() {
  //     return {
  //         startDate: moment()
  //     };
  // }
  // handleChange(date) {
  //     this.setState({
  //         startDate: date
  //     });
  // }
  <div className="col-sm-12 panel">
    <div className="col-sm-12">
      <h3>Recent inbound deliveries</h3>
    </div>
    <div className="col-sm-3">
      <FilterByPOorPL />
    </div>
    <div className="col-sm-2">
      <h4>From: </h4>
      <DatePicker />
    </div>
    <div className="col-sm-2">
      <h4>To: </h4>
      <DatePicker />
    </div>
    <div className="col-sm-2">
      <input type="checkbox" /> Show Failed
    </div>
    <div className="col-sm-2">
      <button type="submit" className="btn btn-primary btn-block">REFRESH</button>
    </div>
    <RecentInboundDeliveriesTable />
  </div>
);

export default RecentInboundDeliveries;
