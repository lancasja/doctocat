module.exports = {
  siteMetadata: {
    title: 'Doctocat',
    shortName: 'Doctocat',
    description: 'A Gatsby theme for creating Primer documentation sites',
  },
  __experimentalThemes: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..',
      },
    },
  ],
  plugins: ['gatsby-plugin-sass'],
}