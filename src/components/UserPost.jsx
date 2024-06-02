import {
  Avatar,
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CgMoreAlt } from 'react-icons/cg';
import PostAction from './PostAction';

const UserPost = ({ replies, likes, title, image, postUrl }) => {
  const toast = useToast();
  const copyLinkToClipboard = () => {
    const url = window.location.href + postUrl;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast({
          title: 'URL copied',
          status: 'info',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
        });
      })
      .catch(() => {
        toast({
          title: 'Failed to copy URL, please try again',
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
        });
      });
  };
  return (
    <Link to={'/markzuckerberg' + postUrl}>
      <Flex gap={3} mb={4} py={5}>
        {/* Post Left Side */}
        <Flex flexDirection={'column'} alignItems={'center'} gap={2}>
          <Avatar name="Mark Zuckerberg" src="/zuck-avatar.png" />
          <Box w={'1.5px'} bg={'gray'} flex={0.89}></Box>
          <Box position={'relative'} bg={'green'} w={'full'}>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              w={5}
              h={5}
              position={'absolute'}
              top={'12px'}
              left={'15px'}
            />
            <Avatar
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
              w={5}
              h={5}
              position={'absolute'}
              top={'-10px'}
              left={'27px'}
            />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
              w={5}
              h={5}
              position={'absolute'}
              top={'-10px'}
            />
          </Box>
        </Flex>

        {/* Post Right Side */}
        <Flex flexDirection={'column'} gap={1.5} grow={1}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Flex gap={2} alignItems={'center'}>
              <Text fontWeight={'bold'}>markzuckerberg</Text>
              <Image src="/verified.png" alt="Verified Logo" h={4} w={4} />
            </Flex>
            <Flex gap={2} alignItems={'center'}>
              <Text color={'gray.light'}>1d</Text>
              <Box onClick={(e) => e.preventDefault()}>
                <Menu>
                  <MenuButton>
                    <CgMoreAlt cursor={'pointer'} size={24} />
                  </MenuButton>
                  <Portal>
                    <MenuList bg={'gray.dark'}>
                      <MenuItem bg={'gray.dark'} onClick={copyLinkToClipboard}>
                        Copy Link
                      </MenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
              </Box>
            </Flex>
          </Flex>
          <Text>{title}</Text>
          {image && <Image src={image} alt="post image" borderRadius={'8px'} />}
          <Flex gap={3} my={2}>
            <PostAction replies={replies} likes={likes} />
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
