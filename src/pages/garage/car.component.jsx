import React from 'react';
import autobind from 'autobindr';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

import {WearFactor} from "../../components/ui-elements/WearFactor";

import { fetchCarsData } from "../../services/garage/garage.actions";

class Car extends React.PureComponent {
  constructor () {
    super();
    autobind(this);

    this.state = {
      now: 225478
    }
  }

  componentWillMount () {
    // this.props.fetchCarsData();
  }

  componentWillReceiveProps (nextProps) {
    // const { garage } = this.props;
    // if (garage !== nextProps.garage) {

    // }
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-4">
        <Panel header="wear and tear">
        <WearFactor label="GRM" from={200000} now={this.state.now} range={60000}/>
        <WearFactor label="Fuel filter:" from={210589} now={this.state.now} range={10000}/>
        </Panel>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  cars: state.cars.data
});

const mapDispatchToProps = dispatch => ({
  fetchCarsData () {
    return dispatch(fetchCarsData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);