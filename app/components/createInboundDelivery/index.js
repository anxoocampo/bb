import React from 'react';

const CreateInboundDelivery = () => (
  <div className="col-sm-12 panel">
    <div className="col-sm-12">
      <h3>New inbound delivery</h3>
    </div>
    <form className="form-horizontal">
      <div className="col-sm-6">
        <div className="form-group">
          <div className="col-sm-4">
            <label className="control-label">Packing List Number *</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputPackingListNumber" placeholder="Please" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-4">
            <label className="control-label">Packing Method *</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputPackingMethod" placeholder="Please" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-4">
            <label className="control-label">Gross Weight (Kg) *</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputGrossWeight" placeholder="Please" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-4">
            <label className="control-label">Net Weight (Kg) *</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputNetWeight" placeholder="Please" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-4">
            <label className="control-label">Volume *</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputVolume" placeholder="Please" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-4">
            <label className="control-label">MOT *</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputMOT" placeholder="Please" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-4">
            <label className="control-label">Handover Date To Carrier *</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputHandoverDateToCarrier" placeholder="Please" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-4">
            <label className="control-label">Attach AQL *</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputAttachAQL" placeholder="Please" />
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <div className="col-sm-4">
            <label className="control-label">Comments</label>
          </div>
          <div className="col-sm-8">
            <textarea type="text" className="form-control" id="inputComments" placeholder="Please" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-8">
            <div className="checkbox">
              <label>
                <input type="checkbox" /> I confirm these products passed a Finished Product Test. *
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-8">
            <div className="checkbox">
              <label>
                <input type="checkbox" /> I confirm these products passed a Raw Material Test. *
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default CreateInboundDelivery;

                // <h3>
                //     New Inbound Deliver
                // </h3>
                // <form className="form-horizontal">
                //     <div className="col-sm-6">
                //         <label for="inputPackingListNumber" className="col-sm-2 control-label">Packing List Number *</label>
                //         <div className="col-sm-10">
                //             <input type="text" className="form-control" id="inputPackingListNumber" placeholder="" />
                //         </div>
                //         <label for="inputPackingMethod" className="col-sm-2 control-label">Packing Method *</label>
                //         <div className="col-sm-10">
                //             <input type="text" className="form-control" id="inputPackingMethod" placeholder="" />
                //         </div>
                //         <label for="inputGrossWeight" className="col-sm-2 control-label">Gross Weight (Kg) *</label>
                //         <div className="col-sm-10">
                //             <input type="text" className="form-control" id="inputGrossWeight" placeholder="" />
                //         </div>
                //         <label for="inputNetWeight" className="col-sm-2 control-label">Net Weight (Kg) *</label>
                //         <div className="col-sm-10">
                //             <input type="text" className="form-control" id="inputNetWeight" placeholder="" />
                //         </div>
                //         <label for="inputVolume" className="col-sm-2 control-label">Volume *</label>
                //         <div className="col-sm-10">
                //             <input type="text" className="form-control" id="inputVolume" placeholder="" />
                //         </div>
                //         <label for="inputMOT" className="col-sm-2 control-label">MOT *</label>
                //         <div className="col-sm-10">
                //             <input type="text" className="form-control" id="inputMOT" placeholder="" />
                //         </div>
                //         <label for="inputHandoverDateToCarrier" className="col-sm-2 control-label">Handover Date To Carrier *</label>
                //         <div className="col-sm-10">
                //             <input type="text" className="form-control" id="inputHandoverDateToCarrier" placeholder="" />
                //         </div>
                //         <label for="inputAttachAQL" className="col-sm-2 control-label">Attach AQL *</label>
                //         <div className="col-sm-10">
                //             <input type="text" className="form-control" id="inputAttachAQL" placeholder="" />
                //         </div>
                //     </div>
                //     <div className="col-sm-6">
                //         <label for="inputComments" className="col-sm-2 control-label">Comments</label>
                //         <div className="col-sm-10">
                //             <input type="text" className="form-control" id="inputComments" placeholder="" />
                //         </div>
                //     </div>
                // </form>
