module.exports = {
  siteName: 'Mark Anthony Serrano Portfolio Website',
  plugins: [
    // Dev Experience
    {
      use: 'gridsome-plugin-typescript',
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        resources: './src/styles/**/*.scss',
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    // Sources
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: process.env.WORDPRESS_WEB_SERVICES, // required
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        customEndpoints: [
          {
            typeName: "Projects",
            route: 'static/projects',
            normalize: true,
          },
          {
            typeName: "Header",
            route: 'static/nav-header',
            normalize: true,
          },
          {
            typeName: "Sidebar",
            route: 'static/nav-sidebar',
            normalize: true,
          },
          {
            typeName: "Footer",
            route: 'static/nav-footer',
            normalize: true,
          },
          {
            typeName: "Mobile",
            route: 'static/nav-mobile',
            normalize: true,
          },
        ]
      }
    }
  ]
};
