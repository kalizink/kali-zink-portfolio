import React from "react";
import "./Header.css";
import tiger from "./tiger.png";

export default function Header() {
	return (
		<div className="container">
			{/* navbar start */}
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					<img src={tiger} className="img-fluid" alt="Chinese zodiac" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="/">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="/">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</nav>
			{/* navbar end  */}
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
		</div>
	);
}
