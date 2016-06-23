/*
 * Create Package Hanger
 */

import React from 'react';
import BurberyBreadCrumb from '../../components/burberyBreadCrumb';
import CreateInboundNavigation from '../../components/createInboundDelivery/CreateInboundNavigation';
import InboundHeader from '../../components/createPackage/InboundHeader';
import InboundPackageHanger from '../../components/createPackage/InboundPackageHanger';
import Items from '../../components/createPackage/Items';

export default class CreatePackageHanger extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <BurberyBreadCrumb section="Create Package - Hanger" />
        <CreateInboundNavigation section="CreatePackageHanger" ponumber={this.props.routeParams.ponumber} />
        <InboundHeader />
        <InboundPackageHanger />
        <Items />
      </div>
    );
  }
}

CreatePackageHanger.propTypes = {
  routeParams: React.PropTypes.object,
};
// export default CreatePackageHanger;
