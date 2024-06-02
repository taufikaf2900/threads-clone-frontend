import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { CgMoreAlt } from 'react-icons/cg';
import PostAction from './PostAction';

const PostComment = ({
  replies,
  likes,
  username,
  commentImageUrl,
  commentImageAlt,
  commentDate,
  comment,
  commentUsername,
}) => {
  return (
    <Flex
      gap={3}
      py={4}
      borderBottom={'1.5px solid'}
      borderColor={'gray.light'}
    >
      <Image
        src={commentImageUrl}
        alt={commentImageAlt}
        w={10}
        h={10}
        borderRadius={'full'}
      />
      <Box flex={1}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Text fontWeight={'bold'}>{commentUsername}</Text>
          <Flex alignItems={'center'} gap={2}>
            <Text color={'gray.light'}>{commentDate}</Text>
            <CgMoreAlt size={24} />
          </Flex>
        </Flex>
        <Text>{comment}</Text>
        <Box mt={2}>
          <PostAction likes={likes} replies={replies} />
        </Box>
      </Box>
    </Flex>
  );
};

export default PostComment;
