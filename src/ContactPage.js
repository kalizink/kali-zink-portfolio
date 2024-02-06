import React from "react";
import NavbarComp from "./NavbarComp";
import "./ContactPage.css";
import email from "./email.png";
import github from "./github.png";
import linkedIn from "./linkedIn.png";
import WorkInquiry from "./WorkInquiry";
import Footer from "./Footer";

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
				<h2 className="mt-3">
					<a
						href="mailto:kalizink65@gmail.com"
						alt="email"
						title="kalizink65@gmail.com"
						target="blank"
						className="text">
						kalizink65@gmail.com
					</a>
				</h2>
			</div>
			<div className="text-center mt-5">
				<img src={github} alt="github" title="GitHub" />
				<h2 className="mt-3">
					<a
						href="https://github.com/kalizink"
						alt="github"
						title="GitHub"
						target="blank"
						className="text">
						https://github.com/kalizink
					</a>
				</h2>
			</div>
			<div className="text-center mt-3">
				<img src={linkedIn} alt="linkedIn" title="LinkedIn" />
				<h2>
					<a
						href="https://www.linkedin.com/in/kalizink/"
						alt="linkedIn"
						title="LinkedIn Profile"
						target="blank"
						className="text">
						https://www.linkedin.com/in/kalizink/
					</a>
				</h2>
			</div>
			<br />
			<WorkInquiry />
			<br />
			<Footer />
		</div>
	);
}
