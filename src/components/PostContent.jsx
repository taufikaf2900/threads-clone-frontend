import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import PostAction from './PostAction';

const PostContent = () => {
  return (
    <Box>
      <Text my={2} fontWeight={'normal'}>
        Let's talk about Threads
      </Text>
      <Image src="/post1.png" borderRadius={'8px'} />
      <Box mt={3}>
        <PostAction replies={238} likes={801} />
      </Box>
      <Flex
        py={4}
        mt={4}
        borderBlock={'1.5px solid'}
        borderColor={'gray.light'}
        w={'full'}
        justifyContent={'space-between'}
      >
        <Box>
          <Flex alignItems={'center'} gap={3}>
            <Text fontSize={28}>👋</Text>
            <Text>Get the app to like, reply and post</Text>
          </Flex>
        </Box>
        <Button>Get</Button>
      </Flex>
    </Box>
  );
};

export default PostContent;
