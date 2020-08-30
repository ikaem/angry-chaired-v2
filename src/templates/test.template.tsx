import React from "react"
import { MDXProvider } from "@mdx-js/react"

import Footer from "../components/footer.component"
import Header from "../components/header.component"


const TestTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MDXProvider components={{
          h3: (props) => <h1 {...props} style={{color: "red"}}/>,
          p: (props) => <p {...props} className="custom-class"/>,
          Header,
          Footer
      }}>{children}</MDXProvider>
    </div>
  )
}

export default TestTemplate
