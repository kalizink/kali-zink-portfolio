import React from "react";
import NavbarComp from "./NavbarComp";
import "./WorkPage.css";
import dictionary from "./dictionary.png";
import weather from "./WeatherApp.png";
import aiPoem from "./poem.png";
import boogie from "./boogie.png";
import WorkInquiry from "./WorkInquiry";
import Footer from "./Footer";

export default function WorkPage() {
	return (
		<div className="WorkPage">
			<NavbarComp />
			<br />
			<h1 className="mt-5 text-center">Featured Projects</h1>
			<p className="text-center">
				<strong>Tools and Equipment:</strong> VS Code, NPM, MacOS, Github, and
				Netlify{" "}
			</p>

			<section>
				<div className="row">
					<div className="column">
						<div className="animateImg margin-adjust">
							<a
								href="https://dictionary-kz.netlify.app/"
								alt="dictionary app"
								title="Dictionary App"
								target="blank">
								<img src={dictionary} alt="Dictionary" title="Dictionary App" />
							</a>
							<div className="text-center description">
								<strong>Dictionary App</strong> built with: React.js,
								JavaScript, API, and Bootstrap
							</div>
						</div>
					</div>
					<hr className="mt-4 mb-0" />
					<div className="column">
						<div className="animateImg" id="weather-app">
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
						<hr className="mt-4 mb-0" />
						<div className="animateImg" id="aiPoem-app">
							<a
								href="https://ai-poem-generator-kz.netlify.app/"
								alt="AI Generator"
								title="AI Generator"
								target="blank">
								<img src={aiPoem} alt="weather" title="AI Generator" />
							</a>
							<div className="text-center description">
								<strong>AI Poem Generator</strong> built with: JavaScript, API,
								and Artificial Intelligence{" "}
							</div>
						</div>
						<hr className="mt-4 mb-0" />
						<div className="animateImg">
							<a
								href="https://a-boogie-responsive-website-kz.netlify.app/"
								alt="Responsive Web Design"
								title="Responsive Web Design"
								target="blank">
								<img
									src={boogie}
									alt="Responsive Web Design"
									title="Responsive Web Design"
								/>
							</a>
							<div className="text-center description" id="responsiveApp">
								<strong>Responsive Web Design</strong> built with: Flexbox,
								Google SEO, and Responsive
							</div>
						</div>
					</div>
				</div>
			</section>
			<br />
			<WorkInquiry />
			<br />
			<Footer />
		</div>
	);
}
