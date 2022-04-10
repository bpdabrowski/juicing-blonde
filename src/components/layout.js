import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import parse from "html-react-parser"
import Navbar from './Navbar';
import About from '../pages/about';
import Challenges from '../pages/challenges';
import Food from '../pages/food';
import Juice from '../pages/juice';

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <>
        <header className="global-header">
          <Router>
            <Navbar />
            <Routes>
              <Route path='/about' component={About} />
              <Route path='/challenges' component={Challenges} />
              <Route path='/food' component={Food} />
              <Route path='/juice' component={Juice} />
            </Routes>
          </Router>
          {isHomePage ? (
            <div className="landing-wrapper" data-is-root-path={isHomePage}>
              <h1 className="main-heading">
                <Link to="/">{parse(title)}</Link>
              </h1>
            </div>
          ) : (
            <div className="non-landing-wrapper">
              <Link className="header-link-home" to="/">
                {title}
              </Link>
            </div>
          )}
        </header>

      <div className="non-landing-wrapper">
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
