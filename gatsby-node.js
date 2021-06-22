const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const currentProjectTemplate = path.resolve(
    "src/templates/current-project.template.tsx"
  )
  const finishedProjectTemplate = path.resolve(
    "src/templates/project.template.tsx"
  )

  const result = await graphql(`
    query AllMDX {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { published: { eq: true }}}
      ) {
        edges {
          node {
            slug
            frontmatter {
              type
            }
          }
        }
      }
    }
  `)

  const projects = result.data.allMdx.edges

  projects.forEach(({ node }) => {
    if (node.frontmatter.type === "finished") {
      createPage({
        path: `project/${node.slug}`,
        component: finishedProjectTemplate,
        context: {
          slug: node.slug,
        },
      })
    }
    if (node.frontmatter.type === "current") {
      createPage({
        path: `current/${node.slug}`,
        component: currentProjectTemplate,
        context: {
          slug: node.slug,
        },
      })
    }
  })
}
