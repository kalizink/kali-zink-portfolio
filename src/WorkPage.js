import React from "react";
import NavbarComp from "./NavbarComp";
import "./WorkPage.css";
import dictionary from "./dictionary.png";
import weather from "./WeatherApp.png";
import aiPoem from "./poem.png";
import boogie from "./boogie.png";

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
				<div className="row">
					<div className="column">
						<img src={dictionary} alt="dictionary" title="dictionary app" />
					</div>
					<div className="column">
						{/* *** */}
						<div className="animateImg">
							<a
								href="https://weather-react-app-kz.netlify.app/"
								alt="weather app"
								title="Weather App"
								target="blank">
								<img src={weather} alt="weather" title="Weather App" />
							</a>
							<div className="text-center description">
								<strong>Weather App</strong> built with: React.js, JavaScript,
								and Bootstrap
							</div>
						</div>
						{/* *** */}
						<img src={aiPoem} alt="AI Generator" title="AI Generator App" />
						<img src={boogie} alt="boogie" title="Responsive app" />
					</div>
				</div>
			</section>
		</div>
	);
}
