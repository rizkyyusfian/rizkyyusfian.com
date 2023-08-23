import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'


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
    <Layout>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      <Link to="/">Back to Home</Link>
      <DisplayData />
    </Layout>
  )
}

export const Head = () => <Seo title="About Page" />;

export default AboutPage