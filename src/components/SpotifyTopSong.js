import * as React from "react";
import { Box, List, ListItem, Link } from "@chakra-ui/react";

const SpotifyTopSongs = ({ songs }) => {
  return (
    <Box>
      <List spacing={2}>
        {songs.map((song, index) => (
          <ListItem key={index}>
            <Link href={song.url} target="_blank" rel="noopener noreferrer">
              {song.title} - {song.artist}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SpotifyTopSongs;