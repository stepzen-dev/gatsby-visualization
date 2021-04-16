require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Gatsby-Visualization",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "StepZen",
        fieldName: "stepzen",
        url: process.env.STEPZEN_URI,
        headers: {
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
      },
    },
  ],
};
