const path = require("path")

const siteMetadata = {
  title: "Angry Chaired",
  description: "Project portfolio of an aspiring web developer",
  author: "kaem",
}

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "current-project",
        path: `${__dirname}/src/current-project`,
      },
    },
    //
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "testmdx",
        path: `${__dirname}/src/testmdx`,
      },
    },
    //

    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/next`,
      },
    },

    //

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        //
        defaultLayouts: {
          default: path.resolve("./src/templates/next.template.tsx"),
        },
        //
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 566,
            },
          },
        ],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 566,
            },
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Angry Chaired",
        short_name: "Chaired",
        start_url: "/",
        background_color: "#25313c",
        theme_color: "#f4d35e",
        display: "minimal-ui",
        icon: "./src/data/images/favicon.png",
      },
    },
  ],
}
