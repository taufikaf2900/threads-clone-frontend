import { Flex, Image, useColorMode } from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Flex justifyContent={'center'} mt={6} mb={12}>
        <Image
          cursor={'pointer'}
          alt="logo of threads"
          src={colorMode === 'dark' ? '/light-logo.svg' : '/dark-logo.svg'}
          w={6}
          onClick={toggleColorMode}
        />
      </Flex>
    </header>
  );
};

export default Header;
