import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import { BsInstagram } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';

const UserHeader = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();

  const copyLinkToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast({
          title: 'URL copied',
          status: 'info',
          duration: '2000',
          isClosable: true,
          position: 'top-right',
        });
      })
      .catch(() => {
        toast({
          title: 'Failed to copy URL',
          status: 'error',
          duration: '2000',
          isClosable: true,
          position: 'top-right',
        });
      });
  };

  return (
    <VStack gap={4} alignItems={'start'}>
      <Flex justifyContent={'space-between'} w={'full'}>
        <Box>
          <Text
            fontWeight={'bold'}
            fontSize={{
              base: 'md',
              lg: '2xl',
            }}
          >
            Mark Zuckerberg
          </Text>
          <Flex gap={2} alignItems={'center'}>
            <Text fontSize={'sm'}>markzuckerberg</Text>
            <Text
              fontSize={'xs'}
              bg={'gray.dark'}
              borderRadius={'full'}
              color={colorMode === 'dark' ? 'gray.light' : 'whitesmoke'}
              p={1}
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name="Mark Zuckerberg"
            src="/zuck-avatar.png"
            size={{
              base: 'md',
              lg: 'xl',
            }}
          />
        </Box>
      </Flex>
      <Box>
        <Text
          fontSize={{
            base: 'sm',
            lg: 'md',
          }}
        >
          Co-founder, executive chairman and CEO of Meta Platform.
        </Text>
      </Box>
      <Flex w={'full'} justifyContent={'space-between'}>
        <Flex gap={2} alignItems={'center'}>
          <Text
            fontSize={{
              base: 'sm',
              lg: 'md',
            }}
            color={'gray.light'}
          >
            3.2K followers
          </Text>
          <Box w={0.5} h={0.5} bg={'gray.light'} borderRadius={'full'}></Box>
          <Text
            fontSize={{
              base: 'sm',
              lg: 'md',
            }}
            color={'gray.light'}
          >
            instagram.com
          </Text>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={'pointer'} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={'pointer'} />
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
      <Flex w={'full'}>
        <Flex
          grow={1}
          justifyContent={'center'}
          borderBottom={'1.5px solid'}
          borderColor={'white'}
          p={3}
        >
          <Text color={'white'}>Threads</Text>
        </Flex>
        <Flex
          grow={1}
          justifyContent={'center'}
          borderBottom={'1.5px solid'}
          borderColor={'gray'}
        >
          <Text color={'gray.light'}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
