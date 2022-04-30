import React from 'react';
import parse from "html-react-parser"
import { Link } from "gatsby"
import { HeadingText } from '../Stateless/HeadingText';
import { GatsbyImage } from "gatsby-plugin-image"
import PillButton from '../PillButton'
import {
    CellHolder,
    StretchWrapper,
    PostTitle,
    LinkSpanner
  } from './PostListElements';

const PostList = ({
    posts
  }) => {
    return (
        <React.Fragment>
            <HeadingText fontSize="var(--fontSize-4)">Recent Posts</HeadingText>

            {posts.map((post, index) => {
                const title = post.title
                const featuredImage = {
                    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
                    alt: post.featuredImage?.node?.alt || ``,
                }
                var marginTop = "var(--spacing-8)";
                var marginBottom = "var(--spacing-20)";
                if (index % 2 !== 0) {
                    marginTop = "var(--spacing-28)";
                    marginBottom = "var(--spacing-8)";
                }
        
                return (
                    <CellHolder marginTop={marginTop} marginBottom={marginBottom}>
                        <StretchWrapper>
                            <GatsbyImage
                                imgStyle={{borderRadius: "var(--img-borderRadius)"}}
                                image={featuredImage.data}
                                alt={featuredImage.alt}
                            />
                            <div>
                                <PostTitle>
                                    <h2>{parse(title)}</h2>
                                    <Link to={post.uri} itemProp="url">
                                        <LinkSpanner />
                                    </Link>
                                    <small>{post.date}</small>
                                </PostTitle>
                            </div>
                        </StretchWrapper>
                    </CellHolder>
                )
            })}

            <PillButton text="View Posts" action="../all-posts" position="center" margin="20" />
        </React.Fragment>
    );
  };
    
  export default PostList;
  