import React from 'react';
import autobind from 'autobindr';
import { connect } from 'react-redux';
import { UIView, UISref } from '@uirouter/react';
import { Panel } from 'react-bootstrap';

import { capitalize } from "../../services/utils";

import { fetchCarsData } from "../../services/garage/garage.actions";

class Garage extends React.PureComponent {
  constructor () {
    super();

    autobind(this);
  }

  componentWillMount () {
    this.props.fetchCarsData();
  }

  componentWillReceiveProps (nextProps) {
    const { cars } = this.props;
    if (cars !== nextProps.cars) {}
  }

  getPanelHeader (car) {
    return (
      <UISref to="car" params={{"id": car.id}}>
        <a href="">{car.label}</a>
      </UISref>
    );
  }

  getCars () {
    const {cars} = this.props;
    console.log(cars);
    return cars.map((car, index) => {
      return (
        <div key={`$.${index}`} className="col-sm-4">
          <Panel header={this.getPanelHeader(car)}>
            <p>{`car: ${capitalize(car.brand)} ${capitalize(car.model)} (${car.year})`}</p>
            <p>{`distance: ${car.distance} km`}</p>
          </Panel>
        </div>
      )
    })
  }

  render () {
    return (
      <UIView>
        <div className="row">
          {this.getCars()}
        </div>
      </UIView>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Garage);