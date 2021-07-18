import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import Img from 'gatsby-image'

export default function Projects({ data }) {
  console.log(data);

  // const projects = data.allMarkdownRemark.nodes;

  // After providing names to queries
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  // console.log(projects);
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
}

/*
export const query = graphql`
  query Projects {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          stack
          title
          slug
        }
        id
      }
    }
    site{
      siteMetadata{
        contact
      }
    }
  }
`;
*/

// if we write multiple queries like above, we can access the data how we accessed previously inside component.But if provide some prototypes/names to our queries, the way of access data will be changed a litile bit.
export const query = graphql`
  query Projects {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          stack
          title
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
