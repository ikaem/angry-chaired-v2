import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import Layout from "../components/layout.component"
import SEO from "../components/seo.component";

import { ProjectPageQuery } from "../../custom-typings/graphql-typings"

interface ProjectTemplateProps {
  data: ProjectPageQuery
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ data }) => {
  const {
    body,
    excerpt,
    frontmatter: { date, title, featured },
  } = data.mdx 

  return (
    <Layout>
      <SEO 
        pageTitle={title}
        pageDescription={excerpt}
      />
      <ProjectTemplateStyled className="main-content_project-article">
        <Img
          className="project-article_image-container"
          fluid={featured.childImageSharp.fluid}
          alt={`${title} featured image`}
        />

        <div className="project-article_project-details">
          <h2 className="project-details_title">{title}</h2>
          <span className="project-details_date">{date}</span>

          <div className="project-details_remark-insert">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </ProjectTemplateStyled>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectPage($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      excerpt
      frontmatter {
        date
        title
        featured {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 328) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      
    }
  }
`

const ProjectTemplateStyled = styled.article`
  padding: 1rem 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  .project-article_image-container {
    width: 100%;
    height: 60vw;
    max-height: 328px;
    margin-bottom: 1rem;


  }

  .project-article_project-details {
    padding: 0 1rem;
    color: var(--darkBlue);

    .project-details_title {
      font-size: 1.75rem;
      font-weight: 500;
      line-height: 150%;
    }

    .project-details_date {
      display: inline-block;
      color: var(--blue);
      font-size: 0.75rem;
      margin-bottom: 1rem;
    }

    .project-details_remark-insert {
      /*  */
      > p {
        font-size: 1rem;
        line-height: 150%;
      }
      /*  */
      > h3 {
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
        font-weight: 600;
      }

      > ul {
        font-size: 1rem;
        line-height: 150%;
        list-style-type: disc;
        padding-left: 1rem;

        :last-of-type {
          line-height: 100%;
          list-style-type: none;
          padding-left: 0;
          display: flex;
          flex-direction: column;

          > li {
            height: 100%;
            width: 100%;

            :first-child {
              margin-bottom: 1rem;
            }

            > img {
              height: 100%;
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 40rem) {
    padding: 2rem 0;
    margin-bottom: 4rem;

    .project-article_image-container {
      margin-bottom: 2rem;
    }

    .project-article_project-details {
      padding: 0 2rem;

      .project-details_title {
        font-size: 3rem;
      }

      .project-details_date {
        font-size: 1rem;
        margin-bottom: 2rem;
      }

      .project-details_remark-insert {
        /*  */
        > p {
          font-size: 1.25rem;
        }
        /*  */
        > h3 {
          margin-top: 2.25rem;
          margin-bottom: 1.25rem;
          font-size: 1.75rem;
        }
        > ul {
          font-size: 1.25rem;
          padding-left: 2rem;
          padding-left: 2rem;

          :last-of-type {
            flex-direction: row;

            > li:first-child {
              margin-bottom: 0;
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }

  @media (min-width: 76rem) {
    .project-article_project-details {
      padding: 0;
    }

    .gatsby-resp-image-wrapper {
      margin-left: 0 !important;
    }
  }
`
