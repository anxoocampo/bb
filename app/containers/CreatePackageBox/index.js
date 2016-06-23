/*
 * Create Package Box
 */

import React from 'react';
import BurberyBreadCrumb from '../../components/burberyBreadCrumb';
import CreateInboundNavigation from '../../components/createInboundDelivery/CreateInboundNavigation';
import InboundHeader from '../../components/createPackage/InboundHeader';
import InboundPackageBox from '../../components/createPackage/InboundPackageBox';
import Items from '../../components/createPackage/Items';

export default class CreatePackageBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <BurberyBreadCrumb section="Create Package - Box" />
        <CreateInboundNavigation section="CreatePackageBox" ponumber={this.props.routeParams.ponumber} />
        <InboundHeader />
        <InboundPackageBox />
        <Items />
      </div>
    );
  }
}

CreatePackageBox.propTypes = {
  routeParams: React.PropTypes.object,
};
// export default CreatePackageBox;
