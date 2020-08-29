import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/use-site-metadata"

interface SEOProps {
  pageTitle?: string
  pageDescription?: string
}

const SEO: React.FC<SEOProps> = ({ pageTitle, pageDescription }) => {
  const { title, author, description } = useSiteMetadata()

  console.log(title);

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={pageTitle || "Portfolio" }
      titleTemplate={`${title} | %s`}
      meta={[
        { name: "author", content: author },
        { name: "description", content: pageDescription || description },
      ]}
    />
  )
}

export default SEO
