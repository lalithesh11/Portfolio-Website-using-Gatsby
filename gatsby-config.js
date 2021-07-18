/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// When we make anychanges in gatsby-config file somtimes the changes may not reflect.In that case, stop & start the gatsby develop command

module.exports = {
  /* Your site config here */

  // We can get the plugins config data from gatsby website:https://www.gatsbyjs.com/plugins
  // We can serach the required plugin and can run the provided command to install the package and after the can copy the config data
  // We are using gatsby-source-filesystem plugin. To install run the command: npm install gatsby-source-filesystem

  // Transformer plugins in gatsby take a datas source and transform it into something easier to use in our components that we can query in our graphql layer
  // We have installed the markdown data source related plugin and its configuration: npm install gatsby-transformer-remark
  // We are not doing any modfications in the config for gatsby-transformer-remark plugin. So we can simply registered it, no need provide the config in object form

  // If we give images inside a static folder, the components will access those images directly because gatsby will move those to public folder. But by doing this the images will not be get optimized. So in order to do this, we need to install the gatsby-image plugin. Basically we need to install multiple packages here
  //  >>>>npm install gatsby-image
  // >>>>npm install gatsby-transformer-sharp gatsby-plugin-sharp
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Web Warrior",
    description: "Web Dev Portfolio",
    copyright: "This website is copyright 2021 Web Warrior",
    contact: "me@thewebwarriorindia.com",
  },
};
