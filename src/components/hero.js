import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./hero.css"

const Hero = props => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero-img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero">
      <div className="hero-content container">
        <h1>Abigail's Driving School</h1>
        <h5>{props.herotitle}</h5>
        <p className="hero-description">{props.description}</p>
        <div className="hero-actions">
          <a
            href="#program-paths-title"
            className="hero-action hero-action-primary"
          >
            {props.enrollLabel}
          </a>
          <a
            className="hero-action hero-action-secondary"
            href={`tel:${props.phone}`}
          >
            {props.callLabel}
          </a>
        </div>
      </div>
      <BackgroundImage
        className="img-container"
        fluid={data.hero.childImageSharp.fluid}
      ></BackgroundImage>
    </div>
  )
}

export default Hero
