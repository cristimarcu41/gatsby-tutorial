import React from 'react';
import {graphql, Link} from "gatsby";
import Img from 'gatsby-image';
import Layout from "../../components/Layout";
import styles from '../../styles/projects.module.css';

export default function Projects ({data}) {
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've created</h3>
                <section className={styles.projects}>
                    {projects.map(project=> <Link key={project.id} to={project.frontmatter.slug} >
                        <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                        <h2>{project.frontmatter.title}</h2>
                            <h4>{project.frontmatter.stack}</h4>
                        </Link> ) }
                </section>
                <p>Like what you see? Email me at  {contact} for a quote!</p>
            </div>
        </Layout>
    );
};


export const query = graphql`
    query MyQuery {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                frontmatter {
                    slug
                    stack
                    title
                    thumb {
                        childImageSharp {
                            gatsbyImageData
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        size
                        relativePath
                    }
                }
            }
        }
        contact: site {
            siteMetadata{
                contact
            }
        }
    }
`

