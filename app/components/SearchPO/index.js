import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styles from '../../styles/all.css';

class SearchPO extends React.Component {
  getRef(ref) {
    this.poNumber = ref;
  }
  handleSubmit() {
    const poNumber = this.poNumber.value;
    this.openRoute(`/createInboundDelivery/${poNumber}`);
    this.props.onSearch(poNumber);
    this.poNumber = '';
    // this.props.history.pushState(null, "profile/" + username);
  }

  /**
  * Changes the route
  * @param  {string} route The route we want to go to
  */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };
  render() {
    return (
      <div className="col-sm-12 panel">
        <div className="col-sm-12">
          <h3>Create new inbound delivery</h3>
        </div>
        <div className="col-sm-3 form-group">
          <input type="text" className={styles.bbformcontrol} ref={(ref) => this.getRef(ref)} placeholder="Enter the PO number e.g. 1234567" />
        </div>
        <div className="col-sm-3 form-group">
          <button type="submit" className="btn btn-primary btn-block" onClick={() => this.handleSubmit()}>CREATE INBOUND</button>
        </div>
      </div>
    );
  }
}

SearchPO.propTypes = {
  changeRoute: React.PropTypes.func,
  onSearch: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(SearchPO);
