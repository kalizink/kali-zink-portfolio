import React from "react";
import NavbarComp from "./NavbarComp";
import profileImg from "./profile.jpg";
import "./AboutPage.css";
import gym from "./gym.png";
import cat from "./cat.png";
import meditation from "./meditation.png";
import food from "./food.png";
import books from "./books.png";
import plants from "./plants.png";
import WorkInquiry from "./WorkInquiry";
import Footer from "./Footer";

export default function AboutPage() {
	return (
		<div className="AboutPage">
			<NavbarComp />
			<section>
				<div className="row">
					<div className="column mt-5">
						<h1 className="text-center">Kali Zink</h1>
						<h2 className="text-center mt-3">Jr. React Front-end Developer</h2>
						<p className="mt-4">
							{`I'm an eager, self-starting individual who possesses the technical proficiency to debug, optimize functions, learn new platforms, and elevate user experience. Seeking to leverage technical skillset, the opportunity to collaborate, and grow professionally.`}
						</p>
					</div>
					<div className="column ">
						<img
							src={profileImg}
							alt="profile"
							title="Kali Zink"
							className="img-fluid profile"
						/>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="column text-center display">
						<div className="grid-row top-row mb-4">
							<div className="grid-column ">
								<img
									src={gym}
									alt="gym"
									title="working out"
									className="img-fluid"
								/>
							</div>
							<div className="grid-column">
								<img src={cat} alt="cat" title="cats" />
							</div>
							<div className="grid-column">
								<img src={meditation} alt="meditation" title="meditation" />
							</div>
						</div>
						<div className="grid-row">
							<div className="grid-column">
								<img src={food} alt="food" title="cooking" />
							</div>
							<div className="grid-column">
								<img src={books} alt="books" title="books" />
							</div>
							<div className="grid-column">
								<img src={plants} alt="plants" title="plants" />
							</div>
						</div>
					</div>
					<div className="column mt-5 ">
						<h3 className="text-center">My Hobbies:</h3>
						<p className="mt-4">
							I like to invest in myself and continue to grow by meditating and
							reading thriller or self-help books. I also go to the gym
							consistently and meal prep fun, healthy meals because I found a
							new interest in cooking. I enjoy the process even though it
							doesn’t always come out as expected (haha). I love my plants and
							spending time with my two cats.
						</p>
					</div>
				</div>
			</section>
			<br />
			<br />
			<WorkInquiry />
			<br />
			<Footer />
		</div>
	);
}
