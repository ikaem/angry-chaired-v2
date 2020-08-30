import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import useSiteMetadata from "../hooks/use-site-metadata";

const Header: React.FC = () => {

  const { title } = useSiteMetadata();

  return (
    <HeaderStyled className="main-header">
      <nav className="main-header_main-navigation">
        <ul className="main-navigation_nav-options">
          <li className="main-navigation__nav-option">
            <Link to="/#about" className="nav-option_link">
              About
            </Link>
          </li>
          <li className="main-navigation__nav-option">
            <Link to="/current" className="nav-option_link">
              Current Project
            </Link>
          </li>
          <li className="main-navigation__nav-option">
            <a href="https://ikaem.github.io/angry-chaired-blog/" target="_blank" className="nav-option_link blog-link">
              Blog
            </a>
          </li>
        </ul>
        <Link to="/" className="main-navigation_logo-container">
          <h1 className="logo-container_logo-actual">{ title }</h1>
        </Link>
      </nav>
      <p className="main-header_site-lead">
        Welcome to Angry Chaired, a
        <strong>&nbsp; portfolio website &nbsp;</strong> of an
        <strong>&nbsp; aspiring web developer &nbsp;</strong> looking to
        <strong>&nbsp; learn and create</strong>
      </p>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.header`
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;

  .main-navigation_nav-options {
    display: flex;
    margin-bottom: 1rem;

    .main-navigation__nav-option:nth-child(2) {
      margin: 0 1rem;
    }

    .nav-option_link {
      color: var(--darkBlue);
      text-transform: uppercase;
      font-size: 1rem;

      &.blog-link {
        color: var(--red);
      }
    }
  }

  .main-navigation_logo-container {
    display: inline-block;
    margin-bottom: 1rem;

    .logo-container_logo-actual {
      color: var(--red);
      font-size: 2.25rem;
      text-shadow: var(--barelyAShadow);
    }
  }

  .main-header_site-lead {
    color: var(--darkBlue);
    font-size: 1rem;
    line-height: 150%;
  }

  @media (min-width: 40rem) {
    padding: 2rem;

    .main-navigation_nav-options {
      margin-bottom: 2rem;

      .main-navigation__nav-option:nth-child(2) {
        margin: 0 2rem;
      }

      .nav-option_link {
        font-size: 1.25rem;
      }
    }

    .main-navigation_logo-container > .logo-container_logo-actual {
      font-size: 3.5rem;
    }

    .main-header_site-lead {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 56.25rem) {
    .main-navigation_logo-container > .logo-container_logo-actual {
      font-size: 4.5rem;
    }
  }

  @media (min-width: 76rem) {
    padding: 2rem 0;
  }
`
