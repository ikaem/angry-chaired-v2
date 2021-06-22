import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

interface AboutProps {
  myAboutImage: any
}

const About: React.FC<AboutProps> = ({ myAboutImage }) => {
  return (
    <AboutStyled id="about" className="main-content_about">
      <aside className="about_about-me-section">
        <h3 className="about-me-section_label">About me</h3>

        <Img
          className="about-me-section_image-container"
          fluid={myAboutImage}
          alt="Angry Chaired profile image"
        />

        <div className="about-me-section_info">
          <h4 className="info_brief">
            My name is Karlo, and I work to be a web developer
          </h4>
          <p className="info_long">
            I am focused on frontend, and mostly work in React. I can find my way around Node, PSQL and MongoDB, too. I enjoy designing shape of websites in Figma, try to code in TypeScript as much as possible, and generally stay in touch with anything related to the world of web development.
          </p>
          <h4 className="info_brief">
            I don't have professional experience in web development - yet 
          </h4>
          <p className="info_long">
            I am learning though, and hope to find a job where I can experience team work and improve my skills. For now, I throw myself at bunch of smaller projects, and I write a <a href="https://ikaem.github.io/angry-chaired-blog/" target="_blank">blog</a> to keep track of it all. 
          </p>
          <h4 className="info_brief">
            I can work with you
          </h4>
          <p className="info_long">
            Do you need help with your website? Or maybe you just want to see what I am up to? Contact me.
          </p>
          <h4 className="info_brief">
            Why "Angry Chaired"?
          </h4>
          <p className="info_long">
            Because of one of the <a href="https://www.youtube.com/watch?v=IpEXM1Yziws" target="_blank">greatest songs</a> by one of the <a href="https://aliceinchains.com/" target="_blank">greatest bands</a>.
          </p>
        </div>
      </aside>
    </AboutStyled>
  )
}

export default About

const AboutStyled = styled.div`
  padding: 1rem 1rem 0;
  background-color: var(--darkBlue);

  .about_about-me-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid rgba(244, 211, 95, 0.2);

    .about-me-section_label {
      grid-column: 1 / -1;
      color: white;
      font-size: 1.75rem;
    }

    .about-me-section_image-container {
      width: 100%;
      height: 100%;
      max-height: 340px;
      position: relative;

      :after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(244, 211, 95, 0.5);
      }

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0 25%;
        box-shadow: var(--barelyAShadow);
      }
    }

    .about-me-section_info {
      color: white;

      .info_brief {
        font-size: 1.25rem;
        line-height: 125%;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }

      .info_long {
        font-size: 1rem;
        line-height: 150%;
        margin-bottom: 1rem;
        color: rgb(223, 223, 223);

        :last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  @media (min-width: 40rem) {
    padding: 2rem 2rem 0;

    .about_about-me-section {
      gap: 2rem;
      padding-bottom: 2rem;

      .about-me-section_info {
        .info_brief {
          margin-bottom: 0.5rem;
        }

        .info_long {
          margin-bottom: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 56.25rem) {
    .about_about-me-section {
      grid-template-columns: 1fr 1fr;

      .about-me-section_image-container {
        width: 100%;
        height: 100%;
        max-height: 640px;
        position: relative;
      }
    }
  }
`
