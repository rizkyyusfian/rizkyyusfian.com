import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import logolight from "../assets/images/lightlogo.png";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <meta name="description" content="Rizky Yusfian Personal Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <link rel="icon" type="image/png" href={logolight} />
    </>
  );
};

export default Seo;
