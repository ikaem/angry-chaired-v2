import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header.component"
import Footer from "./footer.component"

import backgroundImage from "../data/images/repeating-chevrons-background.svg"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutStyled className="layout-wrapper">
      <GlobalStyle />
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </LayoutStyled>
  )
}

export default Layout

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  .main-content {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }
`

const GlobalStyle = createGlobalStyle`

/* variables */
:root {
  --red: #f95738;
  --yellow: #f4d35e;
  --blue: #545d66;
  --darkBlue: #25313c;
  --touchedWhite: #f0f0f0;
  --barelyAShadow: 0 1px rgba(0, 0, 0, 0.25);
  --barelyABorder: 2px solid rgba(255, 255, 255, 0.2);
  --barelyARadius: 1px;
}

/* setup */

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: 100%;
  overflow-x: hidden;
  background-image: url(${backgroundImage});
  background-size: 100%;

  > div#___gatsby {
    height: 100%;
     > div#gatsby-focus-wrapper {
       height: 100%;
     }
  }
}

body,
ul,
a,
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

img {
  display: block;
  border-radius: var(--barelyARadius);
}

input,
textarea,
button {
  font: inherit;
  border: none;
  background: transparent;
  border-radius: var(--barelyARadius);
}

input:focus,
textarea:focus,
button:focus,
input:active,
textarea:active,
button:active {
  outline: none;
}

/* fonts */

html {
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
}
`
