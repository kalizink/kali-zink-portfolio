import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="Header mt-5">
			<h1 className="text-center">Kali Zink</h1>
			<h2 className="text-center">
				Jr. React Front-end Developer based in Houston, TX
			</h2>
			<div className="text-center adjust-margin">
				<Link to="/ContactPage" className="contactMe-button">
					Contact Me
				</Link>
			</div>
		</div>
	);
}
