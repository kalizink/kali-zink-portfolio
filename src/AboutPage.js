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
			<section>
				<div className="row">
					<div className="col grid">
						<div className="box">
							<img
								src={gym}
								alt="gym"
								title="working out"
								className="img-fluid"
							/>
						</div>
						<div className="box">
							<img src={cat} alt="cat" title="cats" className="img-fluid" />
						</div>
						<div className="box">
							<img
								src={meditation}
								alt="meditation"
								title="meditation"
								className="img-fluid"
							/>
						</div>
						<div className="box">
							<img
								src={food}
								alt="food"
								title="cooking"
								className="img-fluid"
							/>
						</div>
						<div className="box">
							<img
								src={books}
								alt="books"
								title="books"
								className="img-fluid"
							/>
						</div>
						<div className="box">
							<img
								src={plants}
								alt="plants"
								title="plants"
								className="img-fluid"
							/>
						</div>
					</div>
					<div className="col text-center text">
						<h3>My Hobbies:</h3>
						<p className="mt-4">
							{`I like to invest in myself and continue to grow by meditating and reading thriller or self-help books. I also go to the gym consistently and meal prep fun, healthy meals because I found a new interest in cooking. I enjoy the process even though it doesn’t always come out as expected (haha). I love my plants and spending time with my two cats. `}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
