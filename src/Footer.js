import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="Footer text-center">
			Coded by{" "}
			<a
				href="https://github.com/kalizink"
				alt="no-rel"
				target="blank"
				title="GitHub profile">
				Kali Zink
			</a>{" "}
			and is{" "}
			<a
				href="https://github.com/kalizink/kali-zink-portfolio.git"
				target="blank"
				alt="no-rel"
				title="View code">
				open-sourced on Github
			</a>{" "}
			and{" "}
			<a
				href="https://kali-zink-portfolio.netlify.app/"
				target="blank"
				alt="no-rel"
				title="Netlify">
				hosted on Netlify
			</a>
		</div>
	);
}
