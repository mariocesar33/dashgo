import { Box, Flex, Heading, Button, Icon } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { UsersTable } from '../../components/UsersTable';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex width="100%" maxWidth={1480} marginY="6" marginX="auto" paddingX="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} background="gray.800" padding="8">
          <Flex marginBottom="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Usuário</Heading>     
            
            <Button 
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
            >
              Criar novo usuário
            </Button>
          </Flex>

          <UsersTable />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}