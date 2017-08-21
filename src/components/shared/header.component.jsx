import React from 'react';
import { UISref, UISrefActive } from '@uirouter/react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export class Header extends React.Component {

	render () {
		return (
			<header>
				<Navbar fluid={true}>
			    <Navbar.Header>
			      <Navbar.Brand>
			      	<UISref to="root">
			      		<a href="">React-Bootstrap</a>
			      	</UISref>
			      </Navbar.Brand>
			    </Navbar.Header>
			    <Nav>
						<UISrefActive class="active">
							<UISref to="home">
								<NavItem eventKey={2} href="">Home</NavItem>
							</UISref>
						</UISrefActive>
			    	<UISrefActive class="active">
			    		<UISref to="garage">
			    			<NavItem eventKey={1} href="">Garage</NavItem>
			    		</UISref>
			    	</UISrefActive>
			      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
			        <MenuItem eventKey={3.1}>Action</MenuItem>
			        <MenuItem eventKey={3.2}>Another action</MenuItem>
			        <MenuItem eventKey={3.3}>Something else here</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={3.4}>Separated link</MenuItem>
			      </NavDropdown>
			    </Nav>
			  </Navbar>
			</header>
		);
	}
};