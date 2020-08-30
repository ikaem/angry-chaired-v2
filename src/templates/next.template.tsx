import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import Footer from "../components/footer.component"
import Header from "../components/header.component"


const NextTemplate = ({ children }: { children: React.ReactNode }) => {

  const componentsMapping = {
    h3: (props) => <h3 {...props} style={{ color: "red" }} />,
    p: (props) => <p {...props} className="custom-class"/>,
    Link,
    Header,
    Footer
  }

  return (
    <div>
      <MDXProvider components={componentsMapping}>
        
        {children}
        
        </MDXProvider>
    </div>
  )
}

export default NextTemplate
