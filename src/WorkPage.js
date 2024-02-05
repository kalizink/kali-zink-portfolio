import React from "react";
import NavbarComp from "./NavbarComp";
import "./WorkPage.css"

export default function WorkPage() {
	return (
		<div className="WorkPage">
			<NavbarComp />
			<br />
			<h1 className="mt-5 text-center">Featured Projects</h1>
			<p className="text-center">
				<strong>Tools and Equipment:</strong> VS Code, MacOS, Github, and
				Netlify{" "}
			</p>
			<br />
			<section>
				<div className="grid">
					<div>img1</div>
					<div>img2</div>
					<div>img3</div>
					<div>img4</div>
				</div>
			</section>
		</div>
	);
}
