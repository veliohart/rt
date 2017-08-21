import React from 'react';
import autobind from 'autobindr';
import { Panel } from 'react-bootstrap';

import { WearFactor } from "../../components/ui-elements/WearFactor";

class Garage extends React.Component {
  constructor () {
    super();

    autobind(this);
    // this.state = {};
  }

  componentWillMount () {
    this.setState({now: 212598});
  }

  inc() {
    this.setState({now: this.state.now += 1000});
    console.log(this.state.now);
  }
  dec() {
    this.setState({now: this.state.now -= 1000});
    console.log(this.state.now);
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
				<div className="col-sm-4">
					<div className="well well-sm">
						well
					</div>
				</div>
				<div className="col-sm-4">
					<div className="well well-sm">
						well
					</div>
				</div>
			</div>
		)
	}
};

export default Garage;