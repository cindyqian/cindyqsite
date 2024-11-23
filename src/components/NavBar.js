
import React from "react"; //import React library
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav>
      <div className="table-row">
        {/* <Link to="/" className="site-logo"> */}
        {/* <img src="../img/plant-logo-full.png" alt="logo"></img> */}
        {/* </Link> */}
        {/* <ul> */}
        {/* <CustomLink key="technical" to="/">Home</CustomLink>
          <CustomLink key="creative" to="/ComparisonPage">Comparison</CustomLink> */}
        {/* <Link key="home" to="/">Home</Link> */}


        <div className="table-cell px-10">
          <Link style={{ textDecoration: "none" }} className="font-medium text-yellow-500 hover:text-yellow-600" to="/TechnicalPortfolio">Technical Portfolio</Link>
        </div>

        <div className="table-cell px-10">
          <Link style={{ textDecoration: "none" }} className="font-medium text-rose-400 hover:text-rose-500" to="/CreativePortfolio">Creative Portfolio</Link>
        </div>

        {/* </ul> */}
      </div>
    </nav>
  );
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link className="navLink" to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }