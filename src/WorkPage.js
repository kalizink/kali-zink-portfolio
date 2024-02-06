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
				<div className="grid text-center">
					<div>
						<img
							src={dictionary}
							alt="dictionary"
							title="dictionary"
							className="img-fluid"
						/>
					</div>
					<div>
						<img
							src={weather}
							alt="weather"
							title="weather"
							className="img-fluid"
						/>
					</div>
					<div>
						<img
							src={aiPoem}
							alt="AI generator"
							title="AI generator"
							className="img-fluid"
						/>
					</div>
					<div>
						<img
							src={boogie}
							alt="A Boogie Wit da Hoodie"
							title="A Boogie Wit da Hoodie"
							className="img-fluid"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
