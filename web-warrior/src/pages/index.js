import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css'

// this will reate multiple sizes of images for different devices. So we no need to load the large size image for small devices. Here we
// have done optimization
import Img from 'gatsby-image'


export default function Home({data}) {
  console.log(data);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UI Developer at india</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
          <Img fluid={data.file.childImageSharp.fluid}/>
      </section>
    </Layout>
  );
}

/*
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childrenImageSharp {
        fluid {
          src
          srcSet
          sizes
        }
      }
    }
  }
`;
*/

// Instead of writing above, we can write the below where we can access the multiple properties of image 
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
         ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

