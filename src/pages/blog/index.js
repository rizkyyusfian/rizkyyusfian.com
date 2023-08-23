import * as React from "react";
import { Text, Box } from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

const Blog = ({ data }) => {
  return (
    <Layout>
      <p>My cool posts will go in here</p>
      <hr />

      {data.allMdx.nodes.map((node) => (
        <Box key={node.id}>
          <Text fontSize="xl" fontWeight="bold">
            <Link key={node.name} href={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </Text>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <hr />
        </Box>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="Blog Page" />;

export default Blog;
