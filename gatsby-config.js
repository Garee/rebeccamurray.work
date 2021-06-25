require("dotenv").config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "About", to: "/about" },
      { name: "Design", to: "/design" },
      { name: "Photography", to: "/work" },
    ],
    links: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/streetpawdography",
      pinterest: "https://pinterest.com/",
      twitter: "https://twitter.com/",
    },
    locale: "en",
    title: `Rebecca Murray`,
    description: `The personal website of Rebecca Murray`,
    author: `Gary Blackwood <gary@garyblackwood.co.uk>`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rebecca Murray`,
        short_name: `R Murray`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
