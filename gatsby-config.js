require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProd = process.env.NODE_ENV === 'production';

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
    'gatsby-plugin-react-helmet',
    isProd && {
      resolve: 'gatsby-plugin-yandex-metrika',
      options: {
        trackingId: 75405811,
        afterBody: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      }
    }
  ].filter(Boolean),
};


