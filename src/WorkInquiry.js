import React from "react";
import "./WorkInquiry.css";
import { Link } from "react-router-dom";

export default function WorkInquiry() {
	return (
		<div className="WorkInquiry">
			<div className="row">
				<div className="column text-center mt-3 ">
					<h2>Work Inquiry</h2>
					<p className="mt-3">kalizink65@gmail.com</p>
				</div>
				<div className="column text-center margin-adjust2">
					<div className="margin-adjust">
						<Link
							to="/ContactPage"
							className="contactMe-button"
							onClick={() => {
								window.scroll({
									top: 0,
									left: 0,
									behavior: "smooth",
								});
							}}>
							Contact Me
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
