module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "RicciDAndrada",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
          {
            family:`Playfair Display`,
            variants:[`Black 900`]
          }
        ],
      },
    }
  ]
}
    


  
