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
import { css } from 'styled-components';

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
                var marginTop = "2rem";
                var marginBottom = "5rem";
                if (index % 2 !== 0) {
                    marginTop = "7rem";
                    marginBottom = "2rem";
                }
        
                return (
                    <CellHolder marginTop={marginTop} marginBottom={marginBottom}>
                        <StretchWrapper>
                            <GatsbyImage
                                imgStyle={{borderRadius: "17px"}}
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

            <PillButton />
        </React.Fragment>
    );
  };
    
  export default PostList;
  