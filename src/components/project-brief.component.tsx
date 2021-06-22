import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

interface ProjectBriefProps {
  title?: string
  date?: string | null
  slug?: string | null
  featuredImage?: any
}

const ProjectBrief: React.FC<ProjectBriefProps> = ({
  title,
  date,
  slug,
  featuredImage,
}) => {
  return (
    <ProjectBriefStyled className="projects-list-section_project">
      <Link to={`project/${slug}`}>
        <Img
          className="project_image-container"
          fluid={featuredImage}
          alt={`${title} featured image`}
        />

        <h2 className="project_title">{title}</h2>
        <span className="project_date">{date}</span>
      </Link>
    </ProjectBriefStyled>
  )
}

export default ProjectBrief

const ProjectBriefStyled = styled.article`
  height: 100%;

  > a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .project_image-container {
    width: 100%;
    height: 100%;
    margin-bottom: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      max-height: 213px;
      object-fit: cover;
    }
  }

  .project_title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 150%;
    text-align: center;
    color: var(--darkBlue);
  }

  .project_date {
    display: block;
    color: var(--blue);
    font-size: 0.75rem;
    text-align: center;
  }

  @media (min-width: 40rem) {
    .project_image-container {
      margin-bottom: 1rem;
    }

    .project_title {
      font-size: 1.5rem;
    }

    .project_date {
      font-size: 1rem;
    }
  }
`
