import React from "react";
import "./Header.css";

export default function Header() {
	return (
		<div className="Header mt-5">
			<h1 className="text-center">Kali Zink</h1>
			<h2 className="text-center">
				Jr. React Front-end Developer based in Houston, TX
			</h2>
			<div className="text-center adjust-margin">
				<a href="/" className="contactMe-button">
					Contact Me
				</a>
			</div>
		</div>
	);
}
