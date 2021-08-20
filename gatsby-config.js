module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cryptosnakes.io",
    title: "cryptosnakes",
    description: "nft on Cardano"
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-transformer-json",
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images/`,
        ignore: [`**/\.*`, `**/_*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
  ],
};
