import React from "react";
import NavbarComp from "./NavbarComp";
import "./ContactPage.css";
import email from "./email.png";
import github from "./github.png";
import linkedIn from "./linkedIn.png";

export default function ContactPage() {
	return (
		<div className="ContactPage">
			<NavbarComp />
			<br />
			<div className="body mt-5">
				<h1 className="text-center">{`Let's Get in Touch!`}</h1>
			</div>
			<div className="text-center mt-5">
				<img
					src={email}
					alt="email"
					title="kalizink65@gmail.com"
					className="text-center"
				/>
				<h2 className="mt-3">kalizink65@gmail.com</h2>
			</div>
			<div className="text-center mt-5">
				<img src={github} alt="github" title="GitHub" />
				<h2 className="mt-3">https://github.com/kalizink</h2>
			</div>
			<div className="text-center mt-3">
				<img
					src={linkedIn}
					alt="linkedIn"
					title="LinkedIn"
					
				/>
				<h2 >https://www.linkedin.com/in/kalizink/</h2>
			</div>
		</div>
	);
}
