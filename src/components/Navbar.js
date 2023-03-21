import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const { title } = data.site.siteMetadata;
    return (
        <nav>
            <div className='navbar__brand'>{title}</div>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Portfolio Projects</Link>
            </div>
        </nav>
    );
};

export default Navbar;
