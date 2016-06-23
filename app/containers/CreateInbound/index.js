/*
 * Create Inbound Delivery
 */

import React from 'react';
import CreateInboundDelivery from '../../components/createInboundDelivery/';
import BurberyBreadCrumb from '../../components/burberyBreadCrumb/';
import ExistingInbounds from '../../components/createInboundDelivery/ExistingInbounds';
import CreateInboundNavigation from '../../components/createInboundDelivery/CreateInboundNavigation';

export default class CreateInbound extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <BurberyBreadCrumb section="Create Inbound" ponumber={this.props.routeParams.ponumber} />
        <CreateInboundNavigation section="CreateInbound" ponumber={this.props.routeParams.ponumber} />
        <CreateInboundDelivery />
        <ExistingInbounds />
      </div>
    );
  }
}

CreateInbound.propTypes = {
  routeParams: React.PropTypes.object,
};

