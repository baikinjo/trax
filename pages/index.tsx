import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

import GradientLayout from '../components/gradientLayout';
import { useMe } from '../lib/hooks';
import prisma from '../lib/prisma';

const Home = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout roundImage color='green' subtitle='profile' title={`${user?.firstName} ${user?.lastName}`} description={`${user?.playlistsCount} public playlists`} image='https://i.pravatar.cc/300'>
      <Box color='white' paddingX='40px'>
        <Box marginBottom='40px'>
          <Text fontSize='2xl' fontWeight='bold'>Top artist this month</Text>
          <Text fontSize='medium'>only visible to you</Text>
        </Box>
        <Flex>
          {artists.map(artist => (
            <Box padding='16px' width='20%'>
              <Box bg='gray.900' borderRadius='4px' padding='16px' width='100%'>
                <Image src='https://picsum.photos/300' borderRadius='100%' />
                <Box marginTop='24px'>
                  <Text fontSize='large'>{artist.name}</Text>
                  <Text fontSize='sm'>Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists }
  };
};

export default Home;
