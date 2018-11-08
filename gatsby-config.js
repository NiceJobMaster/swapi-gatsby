module.exports = {
  siteMetadata: {
    title: 'Star Wars',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        typePrefix: 'community_education__',
        url: `https://swapi.co/api/films`,
        method: 'get',
        name: `classes`,
        entityLevel: `results`,
        auth: false,
      },
    },
  ],
}
