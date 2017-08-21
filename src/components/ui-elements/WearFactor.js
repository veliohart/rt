import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobindr';
import { ProgressBar } from 'react-bootstrap';

class WearFactor extends React.Component {
  constructor (props) {
    super(props);

    autobind(this);
  }

  wearAndTear () {
    const { now, from } = this.props;
    return now - from;
  }
  now () {
    const { range } = this.props;
    return ((this.wearAndTear()/range)*100);
  }

  style (percent) {
    if (percent <= 75) {
      return "success"
    }
    if (percent <= 90) {
      return "warning"
    }
    return "danger"
  }

  ping () {
    console.log('I am here!');
  }

  render () {
    return (
      <div ref={this.props.getRef}>
        <div className="progress-label">{`${this.props.label} (${this.wearAndTear()} km)`}</div>
        <ProgressBar striped={this.props.striped} bsStyle={this.style(this.now())} now={this.now()} />
      </div>
    );
  }
}

WearFactor.propTypes = {
  striped: PropTypes.bool,
  from: PropTypes.number,
  now: PropTypes.number,
  range: PropTypes.number,
  label: PropTypes.string
};

WearFactor.defaultProps = {
  striped: false,
  from: null,
  now: null,
  range: null,
  label: ''
};

export {
  WearFactor
}