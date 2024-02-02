import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import HomepageProjects from "./HomepageProjects";

export default function App() {
	return (
		<div className="App">
			<div className="container">
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
