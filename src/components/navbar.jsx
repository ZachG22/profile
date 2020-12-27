import React from "react";
import Background from "./background";
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export default class NavigationBar extends React.Component {

	render() {
		const Styles = styled.div`
		.navbar {
			background-color: #000000;
		}
		a, .navbar-brand, .navbar-nav .nav-link {
			color: #bbb;
			&:hover {
			color: white;
			}
		}
		`;
		return (
			<div>
				<Background
					ref={this.navEffect}
					id="my-background"
					aboutRef={this.about}
				/>
				<Styles>
					<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
						<Navbar.Brand href="/">Zach Giordano</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ml-auto">
							<Nav.Item>
								<Nav.Link>
								<Link to="/profile">Home</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
								<Link to="/profile/about">About</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
								<Link to="/profile/contact">Contact</Link>
								</Nav.Link>
							</Nav.Item>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Styles>
			</div>
		);
	}
}
