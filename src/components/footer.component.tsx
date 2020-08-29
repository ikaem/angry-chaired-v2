import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import MessageForm from "../containers/message-form.container"

import GithubSocial from "../data/assets/github-brand-social.svg"
import LinkedInSocial from "../data/assets/linkedin-brand-social.svg"

const Footer: React.FC = () => {

  return (
    <FooterStyled className="main-footer">
      <div className="main-footer_footer-content">
        <MessageForm />

        <section className="footer-content_site-info">
          <Link to="/">
            <h5 className="site-info_logo">Angry Chaired</h5>
          </Link>
          <a href="mailto:kaem@tutanota.com" className="site-info_email">
            ikaem@tutanota.com
          </a>
          <ul className="site-info_social-contacts">
            <li className="site-info__social-contact">
              <a href="" className="social-contact_link">
                <LinkedInSocial />
              </a>
            </li>
            <li className="site-info__social-contact">
              <a href="" className="social-contact_link">
                <GithubSocial />
              </a>
            </li>
          </ul>
          <p className="site-info_background-credit">
            <a href="https://fontawesome.com/icons/linkedin?style=brands">
              LinkedIn
            </a>{" "}
            &amp;{" "}
            <a href="https://fontawesome.com/icons/github-square?style=brands">
              Github
            </a>{" "}
            icons
            <br />
            courtesy of <a href="https://fontawesome.com/">Font Awesome</a>,
            <br />
            used in accordance with their{" "}
            <a href="https://fontawesome.com/license">license</a>.
            <br />
            <br />
            Cool background pattern <br />
            courtesy of{" "}
            <a href="https://svgbackgrounds.com/">SVGBackgrounds.com</a>.
          </p>
        </section>
      </div>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.footer`
  margin-top: auto;
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  background-color: var(--darkBlue);

  .main-footer_footer-content {
    display: flex;
    flex-direction: column;

    .footer-content_site-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .site-info_logo {
        color: var(--yellow);
        font-size: 1.5rem;
        text-shadow: var(--barelyAShadow);
        margin-bottom: 0.25rem;
      }

      .site-info_email {
        display: inline-block;
        color: var(--yellow);
        margin-bottom: 0.5rem;
      }

      .site-info_social-contacts {
        display: flex;
        margin-bottom: 2rem;

        .site-info__social-contact {
          margin-right: 0.25rem;

          :last-child {
            margin-right: 0;
          }
          .social-contact_link {
            color: rgb(223, 223, 223);
            margin-bottom: 2rem;

            :hover {
              color: var(--yellow);
            }

            > svg {
              height: 1.5rem;
              width: 1.5rem;
            }
          }
        }
      }

      .site-info_background-credit {
        color: rgb(223, 223, 223);
        line-height: 150%;

        a {
          color: var(--yellow);
        }
      }
    }
  }

  @media (min-width: 40rem) {
    padding: 2rem;

    .main-footer_footer-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .footer-content_site-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .site-info_background-credit {
          text-align: right;
          margin-top: auto;
          margin-bottom: 3rem;
          padding-left: 2rem;
        }
      }
    }
  }

  @media (min-width: 56.25rem) {
  }

  @media (min-width: 76rem) {
  }
`