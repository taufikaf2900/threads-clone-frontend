import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { CgMoreAlt } from 'react-icons/cg';
import PostAction from './PostAction';

const PostHeader = () => {
  const toast = useToast();

  const copyLinkToClipboard = () => {
    const url = window.location.href;
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
    <VStack alignItems={'start'}>
      <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Box>
          <Flex alignItems={'center'} gap={3}>
            <Avatar name="Mark Zuckerberg" src="/zuck-avatar.png" />
            <Flex alignItems={'center'} gap={2}>
              <Text fontWeight={'bold'}>markzuckerberg</Text>
              <Image src="/verified.png" alt="Verified Logo" h={4} w={4} />
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Flex alignItems={'center'} gap={3}>
            <Text color={'gray.light'}>1d</Text>
            <Menu>
              <MenuButton>
                <CgMoreAlt size={24} />
              </MenuButton>
              <Portal>
                <MenuList bg={'gray.dark'}>
                  <MenuItem bg={'gray.dark'} onClick={copyLinkToClipboard}>
                    Copy URL
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
};

export default PostHeader;
