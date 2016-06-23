import React from 'react';

const InboundPackageBox = () => (
  <div className="col-sm-12 panel">
    <div className="row">
      <div className="col-sm-10">
        <h3>Inbound Package</h3>
      </div>
      <div className="col-sm-2">
        <button className="btn btn-default">CREATE BOX</button>
      </div>
    </div>
    <div className="col-sm-3">
      Number of Identical Boxes
    </div>
    <div className="col-sm-1">
      <input name="inputIdenticalBoxes" type="text" className="form-control" />
    </div>
    <div className="col-sm-3">
      Starting Box Reference Number
    </div>
    <div className="col-sm-1">
      <input name="inputStartingBoxRefNumber" type="text" className="form-control" />
    </div>
    <div className="col-sm-3">
      There are 0 boxes in this Packing List
    </div>
  </div>
);

export default InboundPackageBox;
