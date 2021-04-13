import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import { NotificationNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      <Logo />

      <SearchBox />

      <Flex alignItems="center" marginLeft="auto">
        <NotificationNav />
        <Profile 
          name="Mário César" 
          email="mcsilva@gmail.com" 
          avatarURL="https://avatars.githubusercontent.com/u/24758286?v=4" 
        />
      </Flex>
    </Flex>
  );
};