import { BsHeart, BsHeartFill, BsChat, BsSend } from 'react-icons/bs';
import { BiRepost } from 'react-icons/bi';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const PostAction = ({ replies = 0, likes = 0 }) => {
  const [isLiking, setIsLiking] = useState(false);
  return (
    <Flex flexDirection={'column'} gap={3}>
      <Flex alignItems={'center'} gap={3}>
        {isLiking ? (
          <BsHeartFill
            color="red"
            size={20}
            cursor={'pointer'}
            onClick={(e) => {
              e.preventDefault();
              setIsLiking(!isLiking);
            }}
          />
        ) : (
          <BsHeart
            size={20}
            cursor={'pointer'}
            onClick={(e) => {
              e.preventDefault();
              setIsLiking(!isLiking);
            }}
          />
        )}
        <BsChat size={20} cursor={'pointer'} />
        <BiRepost size={30} cursor={'pointer'} />
        <BsSend size={20} cursor={'pointer'} />
      </Flex>
      <Flex gap={2} alignItems={'center'}>
        <Text
          fontSize={{
            base: 'sm',
            lg: 'md',
          }}
          color={'gray.light'}
        >
          {replies} replies
        </Text>
        <Box w={0.5} h={0.5} bg={'gray.light'} borderRadius={'full'}></Box>
        <Text
          fontSize={{
            base: 'sm',
            lg: 'md',
          }}
          color={'gray.light'}
        >
          {isLiking ? likes + 1 : likes} likes
        </Text>
      </Flex>
    </Flex>
  );
};

export default PostAction;
