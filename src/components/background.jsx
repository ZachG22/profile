import React from "react";
import PropTypes from "prop-types";

export default class Background extends React.Component {
	componentDidMount() {
	}

	render() {
		return (
			<div id="my-background" className="background">
                <div id="seattle-bg" />
				<div className="top-container flex">
					<h1>
						Hello, I&apos;m Zach Giordano.
						<br />
						I&apos;m a Software Development Engineer.
					</h1>
					{/* <button
						className={"work-button " + this.props.bounceIn}
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button> */}
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};