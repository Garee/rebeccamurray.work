import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const IndexPage = ({ data }) => {
  const { gallery, name } = data.item

  return (
    <Layout>
      <SiteMetadata title="Home" description="Portfolio of Rebecca Murray" />

      <Img fluid={gallery[0].localFile.childImageSharp.fluid} alt={name} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    item: contentfulPortfolio(slug: { eq: "Dinner For One" }) {
      description {
        description
      }
      gallery {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 960, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
      name
      related {
        ...PortfolioCard
      }
      summary
      thumbnail {
        localFile {
          publicURL
        }
      }
    }
  }
`
