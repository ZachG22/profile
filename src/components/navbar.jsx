import React from "react";
import Background from "./background";
import About from "./about";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
        this.about = React.createRef();

		this.scrolling = this.scrolling.bind(this);
	}

	componentDidMount() {
	}

	navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<div>
				<Background
					ref={this.navEffect}
					id="my-background"
					aboutRef={this.about}
					bounceIn={"wow bounceIn"}
				/>
				<nav
					id="navbar"
					className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
                        <a 
                            href="#home"
							className="home-style navbar-brand"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}}>
							Home
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<a
                                    href="#about"
									onClick={() => {
										this.scrolling(this.about);
									}}
									className="btn-style nav-item nav-link">
									About
								</a>
							</div>
						</div>
					</div>
				</nav>

				<About
					ref={this.about}
					id="about-container"
					bounceLeft={"wow bounceInLeft"}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
					tada={"wow fadeIn"}
				/>
			</div>
		);
	}
}

export default Navbar;