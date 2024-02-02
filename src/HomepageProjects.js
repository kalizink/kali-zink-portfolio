import React from "react";
import WeatherApp from "./WeatherApp.png";
import "./HomepageProjects.css";
import Boogie from "./boogie.png";
import Poem from "./poem.png";

export default function HomepageProjects() {
	return (
		<div className="HomepageProjects">
			<h4 className="text-center"> Featured Projects</h4>
			{/* weather container start */}
			<div className="row container">
				<div className="col img-container">
					<img
						src={WeatherApp}
						title="Weather Application"
						className="img-fluid"
						alt="WeatherApp"
					/>
				</div>
				<div className="col description">
					<h5 className="text-center"> Weather App</h5>
					<p>
						I built a vanilla JavaScript application in an advanced React coding
						workshop through SheCodes. I became proficient in Bootstrap,
						development workflow, APIs, hosting, and advanced JavaScript. Eager
						to apply new concepts and skills, I created a fully functioning
						weather application.
					</p>
					<br />
					<div className="text-center btn-margin">
						<a href="/" className="learnMore-btn">
							Learn More
						</a>
					</div>
				</div>
			</div>
			{/* weather container end */}
			{/* a boogie container start */}
			<div className="row container">
				<div className="col description">
					<h5 className="text-center"> Responsive App</h5>
					<p>
						I built a vanilla JavaScript website in a SheCodes Responsive
						workshop. I integrated sophisticated techniques using advanced
						Bootstrap and iframes to elevate user experience. After meticulous
						work, I created a website with interactive features responsive to
						any device.
					</p>
					<br />
					<div className="text-center btn-margin">
						<a href="/" className="learnMore-btn">
							Learn More
						</a>
					</div>
				</div>
				<div className="col img-container">
					<img
						src={Boogie}
						title="A Boogie Application"
						className="img-fluid"
						alt="BoogieApp"
					/>
				</div>
			</div>
			{/* a boogie container end */}
			{/* poem container start */}
			<div className="row container">
				<div className="col img-container">
					<img
						src={Poem}
						title="Poem Application"
						className="img-fluid"
						alt="PoemApp"
					/>
				</div>
				<div className="col description">
					<h5 className="text-center"> AI Poem Generator</h5>
					<p>
						I built a vanilla JavaScript interactive text generator with
						artificial intelligence. SheCodes AI Add-on workshop taught me a
						basic understanding of artificial intelligence and integrated AI API
						into code. I learned how to write prompts and instructions to AI
						tools to better user experience. I created a fully functioning poem
						AI text generator.
					</p>
					<br />
					<div className="text-center btn-margin">
						<a href="/" className="learnMore-btn">
							Learn More
						</a>
					</div>
				</div>
			</div>
			{/* poem container end */}
		</div>
	);
}
