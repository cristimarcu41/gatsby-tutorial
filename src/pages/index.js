import React from "react";
import {graphql, Link} from "gatsby";
import Img from 'gatsby-image';

import Layout from "../components/Layout";
import styles from '../styles/home.module.css';

export default function Home({data}) {
    // console.log(data);
  return <Layout>
       <section className={styles.header}>
           <div>
               <h2 >Design</h2>
               <h3>Develop & Deploy</h3>

               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, soluta.</p>
               <Link className={styles.btn} to='/projects'>My Projects</Link>
           </div>
           <Img fluid={data.file.childImageSharp.fluid} />
       </section>
  </Layout>
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

