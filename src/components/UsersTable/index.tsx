import { Box, Button, Checkbox, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';
import { TableRow } from './TableRow';


export function UsersTable() {
  return (
    <Table colorScheme="whiteAlpha" >
      <Thead>
        <Tr>
          <Th paddingX="6" color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          <Th>Data de cadastro</Th>
          <Th width="8"></Th>
        </Tr>
      </Thead>

      <Tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </Tbody>
    </Table>
  );
}