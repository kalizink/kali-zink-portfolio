import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavbarComp.css";

function NavbarComp() {
	return (
		<Navbar bg="dark" variant="dark" fixed="top" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/" className="link">
						Kali Zink
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav>
							<Link to="/" className="link">
								Home
							</Link>
						</Nav>
						{/* messing around here */}
						<Nav>
							<Link to="/AboutPage" className="link">
								About
							</Link>
						</Nav>
						{/* messing around here */}
						<Nav>
							<Link to="/WorkPage" className="link">
								Work
							</Link>
						</Nav>
						<Nav>
							<Link to="/ContactPage" className="link">
								Contact
							</Link>
						</Nav>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarComp;
