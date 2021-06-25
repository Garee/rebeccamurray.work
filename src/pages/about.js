import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="About Rebecca Murray" />

    <div className="bg-black">
      <div className=" py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
              {data.details.title}
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-gray-400 sm:text-2xl">
              {data.details.subtitle}
            </h2>
            <div className="mt-4" style={{ whiteSpace: "pre-wrap" }}>
              {data.details.description.description}
              <br />
              <br />
              <br />
              <a
                href={"mailto:" + data.details.email}
                className="border-b border-gray-500 hover:border-gray-400 hover:text-gray-300"
              >
                {data.details.email}
              </a>
              <br />
              <a
                href={"mailto:" + data.details.email2}
                className="border-b border-gray-500 hover:border-gray-400 hover:text-gray-300"
              >
                {data.details.email2}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Rebecca Murray"
              className="shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    details: contentfulAbout {
      title
      subtitle
      description {
        description
      }
      email
      email2
    }
  }
`
