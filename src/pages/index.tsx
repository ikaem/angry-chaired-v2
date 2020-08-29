import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout.component"
import HeroProject from "../components/hero-project.component"
import PortfolioMapper from "../containers/portfolio-mapper"
import About from "../components/about.component"
import SEO from "../components/seo.component";

import { HomePageQuery } from "../../custom-typings/graphql-typings";

interface HomePageProps {
  data: HomePageQuery
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const heroProject = data.mdxProjectBriefs.edges[0].node
  const portfolioProjects = data.mdxProjectBriefs.edges.slice(1).map(({ node }) => node)

  return (
    <Layout>
      <SEO />

      <HeroProject
        title={heroProject.frontmatter?.title}
        date={heroProject.frontmatter?.date}
        excerpt={heroProject.excerpt}
        id={heroProject.id}
        slug={heroProject.slug}
        featuredImage={
          heroProject.frontmatter?.featured?.childImageSharp?.fluid
        }
      />

      {portfolioProjects && (
        <PortfolioMapper
          projects={portfolioProjects.map(project => {
            return {
              title: project.frontmatter?.title,
              date: project.frontmatter?.date,
              id: project.id,
              slug: project.slug,
              featuredImage:
                project.frontmatter?.featured?.childImageSharp?.fluid,
            }
          })}
        />
      )}

      <About 
        myAboutImage={data.aboutImage?.childImageSharp?.fluid}
      />
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
    aboutImage: file(
      relativePath: { eq: "images/not-photo-of-me.jpg" }
      sourceInstanceName: { eq: "assets" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mdxProjectBriefs: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, type: { eq: "finished" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            featured {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          id
          slug
        }
      }
    }
  }
`
