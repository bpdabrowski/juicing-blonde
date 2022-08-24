import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingText from './LandingText';
import About from '../pages/about';
import Challenges from '../pages/challenges';
import Food from '../pages/food';
import Juice from '../pages/juice';

import Loadable from "@loadable/component"

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

  var wrapperName = "landing-wrapper"
  if (isHomePage) {
    var landingText = <LandingText />
  } else {
    wrapperName = "non-landing-wrapper"
  }

  return (
      <>
        <div className={wrapperName} data-is-root-path={isHomePage}>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/about' component={About} />
              <Route path='/challenges' component={Challenges} />
              <Route path='/food' component={Food} />
              <Route path='/juice' component={Juice} />
            </Routes>
          </Router>
          {landingText}
        </div>
        <div className="content">
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

const LoadableLayout = Loadable(() => import("./Layout"))

export default LoadableLayout
