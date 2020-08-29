export interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

export interface HomePageQuery {
  aboutImage: {
    childImageSharp: {
      fluid: any
    }
  }
  mdxProjectBriefs: {
    edges: {
      node: {
        excerpt: string
        id: string
        slug: string
        frontmatter: {
          date: string
          title: string
          featured: {
            childImageSharp: {
              fluid: any
            }
          }
        }
      }
    }[]
  }
}

export interface ProjectPageQuery {
  mdx: {
    body: string
    excerpt: string
    frontmatter: {
      date: string
      title: string
      featured: {
        childImageSharp: {
          fluid: any
        }
      }
    }
  }
}
