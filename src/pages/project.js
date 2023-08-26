import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";

const DisplayData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data);
  return (
    <div>
      <p>Site title is: {data.site.siteMetadata.title}</p>
    </div>
  );
};

const ProjectPage = ({ name }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/rizkyyusfian/repos?per_page=100"
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRepos();
  }, []);
  return (
    <Layout>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              url={repo.html_url}
              language={repo.language}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default ProjectPage;
