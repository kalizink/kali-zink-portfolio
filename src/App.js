import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import HomepageProjects from "./HomepageProjects";
import NavbarComp from "./NavbarComp";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<NavbarComp />
				<Header />
				<br />
				<hr />
				<HomepageProjects />
				<br />
				<Footer />
			</div>
		</div>
	);
}
