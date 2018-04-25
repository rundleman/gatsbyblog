module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'A new blog',
  },
  pathPrefix: '/gatsbyblog',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'h9ewybwoctkv',
        accessToken:
          '167f394206b6a004ab09004260a87abd0a7a5ac2739f9bb8cb94b4709bedcf37',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
