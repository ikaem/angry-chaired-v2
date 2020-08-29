import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

interface HeroProjectProps {
  title?: string
  date?: string | null
  excerpt?: string
  id?: string
  slug?: string | null
  featuredImage?: any
}

const HeroProject: React.FC<HeroProjectProps> = ({
  title,
  date,
  excerpt,
  id,
  slug,
  featuredImage,
}) => {
  return (
    <HeroProjectStyled className="main-content_hero">
      <Link to={`project/${slug}`}>
        <article className="hero_newest-project-section">

          <Img
            className="newest-project-section_image-container"
            fluid={featuredImage}
            alt={`${title} featured image`}
          />
          <div className="newest-project-section_info">
            <h2 className="info_project-title">{title}</h2>
            <span className="info_project-date">{date}</span>
            <p className="info_project-excerpt">{excerpt}</p>
          </div>
        </article>
      </Link>
    </HeroProjectStyled>
  )
}

export default HeroProject

const HeroProjectStyled = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;

  .hero_newest-project-section {
    display: flex;
    flex-direction: column;

    .newest-project-section_image-container {
      width: 100%;
      height: 100%;
      margin-bottom: 1rem;

      img {
        width: 100%;
        height: 100%;
        box-shadow: var(--barelyAShadow);
        object-fit: cover;
        max-height: 328px;
      }
    }

    .newest-project-section_info {
      color: var(--darkBlue);
      display: flex;
      flex-direction: column;

      .info_project-title {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 150%;
      }

      .info_project-date {
        display: inline-block;
        color: var(--blue);
        font-size: 0.75rem;
        margin-bottom: 1rem;
      }

      .info_project-excerpt {
        font-size: 1rem;
        line-height: 150%;
      }
    }
  }

  @media (min-width: 40rem) {
    padding: 2rem;
    margin-bottom: 2rem;

    .hero_newest-project-section {
      .newest-project-section_image-container {
        margin-bottom: 2rem;
      }

      .newest-project-section_info {
        .info_project-title {
          font-size: 1.75rem;
        }

        .info_project-date {
          font-size: 1rem;
          margin-bottom: 2rem;
        }

        .info_project-excerpt {
          font-size: 1.25rem;
        }
      }
    }
  }

  @media (min-width: 56.25rem) {
    .hero_newest-project-section {
      flex-direction: row;

      .newest-project-section_image-container {
        width: 50%;
        height: 328px;
        margin-bottom: 0;
        margin-right: 1rem;
      }

      .newest-project-section_info {
        width: 50%;
        margin-left: 1rem;

        .info_project-title {
          margin-top: 1.25rem;
        }
      }
    }
  }

  @media (min-width: 76rem) {
    padding: 2rem 0;
  }
`
