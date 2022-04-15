import { Box, Divider, LinkBox, LinkOverlay, List, ListIcon, ListItem } from '@chakra-ui/layout';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { MdFavorite, MdHome, MdLibraryMusic, MdPlaylistAdd, MdSearch } from 'react-icons/md';

import { usePlaylist } from '../lib/hooks';

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/'
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search'
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library'
  },
];

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/'
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites'
  }
];

const Sidebar = () => {
  const { playlists } = usePlaylist();

  return (
    <Box width='100%' height='calc(100vh - 100px)' bg='black' paddingX='8px' color='gray'>
      <Box paddingY='24px' height='100%'>
        <Box width='120px' marginBottom='24px' paddingX='24px'>
          <NextImage src='/logo.svg' height={64} width={120} />
        </Box>
        <Box marginBottom='24px'>
          <List spacing={2}>
            {navMenu.map(({ name, icon, route }) => (
              <ListItem paddingX='24px' fontSize='16px' key={name}>
                <LinkBox>
                  <NextLink href={route} passHref>
                    <LinkOverlay>
                      <ListIcon as={icon} color='white' marginRight='24px' />
                      {name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginBottom='16px'>
          <List spacing={2}>
            {musicMenu.map(({ name, icon, route }) => (
              <ListItem paddingX='24px' fontSize='16px' key={name}>
                <LinkBox>
                  <NextLink href={route} passHref>
                    <LinkOverlay>
                      <ListIcon as={icon} color='white' marginRight='24px' />
                      {name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color='gray.800' />
        <Box marginTop='16px' height='66%' overflowY='auto' paddingBottom='16px'>
          <List spacing={2}>
            {playlists.map(({ name, id }) => (
              <ListItem paddingX='24px' key={id}>
                <LinkBox>
                  <NextLink href={{
                    pathname: '/playlist/[id]',
                    query: { id }
                  }}>
                    <LinkOverlay>
                      {name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
