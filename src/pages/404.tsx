import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout.component"

const NoPage = () => (
  <Layout>
    <NoPageStyled>
      <h3>Unfortunately, there is no such page 😕</h3>
      <p>
        Instead, why not check the project I am{" "}
        <Link to="/current"> currently working on</Link>, or head over to the{" "}
        <a href="https://ikaem.github.io/angry-chaired-blog/">
          Angry Chaired Blog
        </a>
        ?
      </p>
    </NoPageStyled>
  </Layout>
)

export default NoPage

const NoPageStyled = styled.div`
  margin: 3rem auto 5rem;
  width: 100%;
  max-width: 32rem;
  padding: 0 1rem;
  color: var(--darkBlue);
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.75rem;
    line-height: 150%;
  }

  p {
    font-size: 1rem;

    a {
      color: var(--red);
    }
  }

  @media (min-width: 40rem) {
    margin: 5rem auto 8rem;
    padding: 0 2rem;

    h3 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
`
