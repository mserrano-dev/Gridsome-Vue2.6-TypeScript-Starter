module.exports = {
  siteName: 'Mark Anthony Serrano Portfolio Website',
  icon: 'static/assets/favicon.png',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { cleanupIDs: false }
          ]
        }
      });
  },
  templates: {
    Projects: [
      // {
      //   path: '/projects/:slug',
      //   component: './src/templates/singleProject.vue'
      // }
    ],
  },
  plugins: [
    // Analytics
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GOOGLE_ANALYTICS,
      }
    },
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
          // {
          //   typeName: "Projects",
          //   route: 'static/projects',
          //   normalize: true,
          // },
        ]
      }
    }
  ]
};
