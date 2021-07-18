import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

export default function Navbar() {
    // useStaticQuery hook sometimes throw error if we write component first letter in smallcase, so use always caps.
    // we can use useStaticQuery only once in a particular component.
    
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  const {title}=data.site.siteMetadata;
  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  );
}
