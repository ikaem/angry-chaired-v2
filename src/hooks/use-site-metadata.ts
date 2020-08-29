import { graphql, useStaticQuery } from "gatsby"

import { SiteMetadataQuery } from "../../custom-typings/graphql-typings"

const useSiteMetadata = () => {
  const data: SiteMetadataQuery = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return data.site.siteMetadata
}

export default useSiteMetadata
