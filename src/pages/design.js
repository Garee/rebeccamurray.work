import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const DesignPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Design" description="Portfolio of Rebecca Murray" />

      <div className="bg-black py-12 lg:py-16">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div>No projects found.</div>
        )}
      </div>
    </Layout>
  )
}

export default DesignPage

export const query = graphql`
  query DesignQuery {
    portfolio: allContentfulPortfolio(filter: { type: { eq: "design" } }) {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
