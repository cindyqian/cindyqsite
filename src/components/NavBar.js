import React from "react"; //import React library
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './index.css';

export default function NavBar(props) {
	return (
		<nav className="navnav">
			<div className="nav-left">
				<Link to="/" className="site-logo">
					<img src="../img/plant-logo-full.png" alt="logo"></img>
				</Link>
				<ul>
					<CustomLink textType="home" key="home" to="/HomePage">Cindy Qian</CustomLink>
					<CustomLink textType="technical" key="technical" to="/TechnicalPortfolio">Technical Portfolio</CustomLink>
					<CustomLink textType="creative" key="creative" to="/CreativePortfolio">Creative Portfolio</CustomLink>
					{/* <CustomLink key="compare" to="/TechnicalPortfolio">Technical Portfolio</CustomLink>
					<CustomLink key="compare" to="/CreativePortfolio">Creative Portfolio</CustomLink> */}
				</ul>
			</div>
		</nav>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	var color = "yellow"
  if (props.textType == "creative") {
    color = "red";
  }
	return (
		<li className={isActive ? "active" : ""}>
			<Link text-decoration="none" className={"font-medium text-" + color + "-500 hover:text-" + color + "-600"} to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}