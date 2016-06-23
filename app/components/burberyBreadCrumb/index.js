import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class BurberyBreadCrumb extends React.Component {
// export default class BurberyBreadCrumb extends React.Component {

  goHome() {
    this.openRoute('/');
  }

  openRoute = (route) => {
    this.props.changeRoute(route);
  };
  render() {
    return (
      <div>
        <div className="col-sm-12">
          <button onClick={() => this.goHome()} className="btn btn-default">Home</button>
          {this.props.section !== 'Home' && <button className="btn btn-default">{this.props.section}</button>}
          {this.props.section === 'Create Inbound' && <button className="btn btn-default">{this.props.ponumber}</button>}
        </div>
      </div>
    );
  }
}

BurberyBreadCrumb.propTypes = {
  section: React.PropTypes.string.isRequired,
  ponumber: React.PropTypes.string,
  goHome: React.PropTypes.func,
  changeRoute: React.PropTypes.func,
};

// export default BurberyBreadCrumb;

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(BurberyBreadCrumb);
