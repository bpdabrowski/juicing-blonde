import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
 
      {/* <Bio /> */}
      <h2 className="recent-posts-heading">Recent Posts</h2>
      <ol style={{ listStyle: `none` }}>
          <div className="row">
            {posts.map((post, index) => {
              const title = post.title
              const featuredImage = {
                data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
                alt: post.featuredImage?.node?.alt || ``,
              }
              var staggerMarginClass = "column"
              if (index === 1 || index === 3) {
                staggerMarginClass = "column-stagger-margin"
              }

              return (
                <li key={post.uri}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  > 
                    <div className={staggerMarginClass}>
                      <div className="stretchy-wrapper">
                      <GatsbyImage
                          image={featuredImage.data}
                          alt={featuredImage.alt}
                        />
                        <div>
                          <div className="post-title">
                            <h2>{parse(title)}</h2>
                              <Link to={post.uri} itemProp="url">
                                <span itemProp="headline" className="link-spanner"></span>
                              </Link>
                            <small>{post.date}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </div>
      </ol>
      <div className="button-container">
        <a className="button" href="../all-posts">
          View Posts
        </a>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
