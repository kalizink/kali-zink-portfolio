import React from "react";
import NavbarComp from "./NavbarComp";
import profileImg from "./profile.jpg";
import "./AboutPage.css";

export default function AboutPage() {
	return (
		<div className="AboutPage">
			<NavbarComp />
			<br />
			<section className="mt-5">
				<div className="row">
					<div className="col mt-5">
						<h1 className="text-center">Kali Zink</h1>
						<h2 className="text-center mt-3">Jr. React Front-end Developer</h2>
						<div className="mt-4">
							{`I'm an eager, self-starting individual who possesses the technical proficiency to debug, optimize functions, learn new platforms, and elevate user experience. Seeking to leverage technical skillset, the opportunity to collaborate, and grow professionally.`}
						</div>
					</div>
					<div className="col img-container">
						{" "}
						<img
							src={profileImg}
							alt="profile pic"
							title="Kali Zink"
							className="img-fluid "
						/>
					</div>
				</div>
			</section>
			<br />
			<section className="hobbies-container"></section>
		</div>
	);
}
