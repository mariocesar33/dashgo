import { Checkbox, Table, Tbody, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import { TableRow } from './TableRow';


export function UsersTable() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  return (
    <Table colorScheme="whiteAlpha" >
      <Thead>
        <Tr>
          <Th paddingX="6" color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          { isWideVersion && (
            <Th>Data de cadastro</Th>)
          }
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