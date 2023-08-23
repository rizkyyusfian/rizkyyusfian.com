import { Box, Text, Link, Wrap } from "@chakra-ui/react";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import { graphql } from "gatsby";

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
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Box>
        <Hero />
        <Box p={8}>
          <Text fontSize="4xl" fontWeight="bold">
            Latest Post
          </Text>
          <Box>
            <Box>
              {data.allMdx.nodes.map((node) => (
                <Box borderBottom={"1px solid white"}>
                  <Wrap>
                    <Text fontSize="xl" fontWeight="bold">
                      <Link key={node.name} href={`/blog/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                      </Link>
                    </Text>
                    <Text mt={1}>Welcome to my digital garden. 🌱</Text>
                  </Wrap>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
