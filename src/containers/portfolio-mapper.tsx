import React from "react"
import styled from "styled-components"

import ProjectBrief from "../components/project-brief.component"

interface PortfolioMapperProps {
  projects: {
    title?: string
    date?: string | null
    id?: string
    slug?: string | null
    featuredImage?: any
  }[]
}

const PortfolioMapper: React.FC<PortfolioMapperProps> = ({ projects }) => {
  return (
    <PortfolioMapperStyled className="main-content_portfolio">
      <ul className="portfolio_projects-list-section">
        {projects.map(({ id, title, date, slug, featuredImage }) => (
          <li key={id}>
            <ProjectBrief date={date} title={title} slug={slug} featuredImage={featuredImage} />
          </li>
        ))}
      </ul>
    </PortfolioMapperStyled>
  )
}

export default PortfolioMapper

const PortfolioMapperStyled = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;

  .portfolio_projects-list-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 2rem;
  }

  @media (min-width: 40rem) {
    padding: 1rem 2rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 56.25rem) {
    .portfolio_projects-list-section {
      grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    }
  }

  @media (min-width: 76rem) {
    padding: 1rem 0;
    margin-bottom: 4rem;
  }
`
