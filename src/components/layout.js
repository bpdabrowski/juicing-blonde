import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LandingText from './LandingText';
import Loadable from "@loadable/component"

const LoadableRouter = Loadable(() => import("./NavbarRouter"))

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
          <LoadableRouter />
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

// const LoadableLayout = Loadable(() => Layout)
// const LoadableLayout = Loadable(() => import("./Layout"))

export default Layout
