import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class CreateInboundNavigation extends React.Component {
  goNext() {
    if (this.props.section === 'CreateInbound') {
      this.openRoute(`/createInboundDelivery/${this.props.ponumber}/createPackageBox`);
    } else if (this.props.section === 'CreatePackageBox') {
      this.openRoute(`/createInboundDelivery/${this.props.ponumber}/createPackageHanger`);
    }
  }

  goBack() {
    if (this.props.section === 'CreateInbound') {
      this.openRoute('/');
    } else if (this.props.section === 'CreatePackageBox') {
      this.openRoute(`/createInboundDelivery/${this.props.ponumber}`);
    } else if (this.props.section === 'CreatePackageHanger') {
      this.openRoute(`/createInboundDelivery/${this.props.ponumber}/createPackageBox`);
    }
  }

  openRoute = (route) => {
    this.props.changeRoute(route);
  };
  render() {
    return (
      <div className="col-sm-12 panel">
        <div className="col-sm-10"></div>
        <button onClick={() => this.goBack()} className="btn btn-default col-sm-1">BACK</button>
        <button onClick={() => this.goNext()} className="btn btn-primary col-sm-1">NEXT</button>
      </div>
    );
  }
}
// {this.props.section==='0' && <button className="btn btn-default col-sm-1">BACK</button>}
// {this.props.section==='0' && <button className="btn btn-default col-sm-1">BACK</button>}
// {this.props.section!=='0' && <button className="btn btn-default col-sm-1">BACK</button>}

// export default CreateInboundNavigation;


CreateInboundNavigation.propTypes = {
  section: React.PropTypes.string.isRequired,
  ponumber: React.PropTypes.string,
  goNext: React.PropTypes.func,
  goBack: React.PropTypes.func,
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(CreateInboundNavigation);
