module.exports = {
  siteMetadata: {
    title: "BestTeam",
    description: "Составьте текст вакансии и наймите лучших специалистов"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/static/favicon-512x512.png',
        "short_name": "BestTeam",
        "name": "BestTeam - находи лучших в команду!",
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
      },
    },
    'gatsby-plugin-react-helmet'
  ],
};


