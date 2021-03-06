
module.exports = {
 
  plugins: [
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name: `pages`,
        path:`${__dirname}/src/pages`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name: `styles`,
        path:`${__dirname}/src/styles`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name: `images`,
        path:`${__dirname}/src/images`
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name: `components`,
        path:`${__dirname}/src/components`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve:`gatsby-plugin-mdx`,
      options:{
         extensions:[`.md`,`.mdx`],
         gatsbyRemarkPlugins:[
           {
             resolve:`gatsby-remark-images`,
             options:{
               maxWidth:1200,
             },
           },
         ],
      },
    },
  ],
}
 