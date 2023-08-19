import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


const DisplayData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  )
  console.log(data);
  return (
    <div>
      <p>Site title is: {data.site.siteMetadata.title}</p>
    </div>
  )
}

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      <Link to="/">Back to Home</Link>
      <DisplayData />
    </main>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage