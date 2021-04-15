import { Box, Button, Checkbox, HStack, Icon, Td, Text, Tr, useBreakpointValue } from '@chakra-ui/react'
import { RiPencilLine, RiDeleteBinLine } from 'react-icons/ri';
import { ConfigurationButton } from '../ConfigurationButton';


export function TableRow() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  return (
    <Tr>
      <Td paddingX={["4", "4", "6"]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">Mário César</Text>
          <Text fontSize="sm" color="gray.300">mcsilva@gmail.com</Text>
        </Box>
      </Td>
      { isWideVersion && (
        <Td>12 de Abril, 2021</Td>)
      }
      <Td>
        { isWideVersion && (
        <HStack>purple
          <ConfigurationButton colorScheme="purple" title="Editar" icon={RiPencilLine}/>
          <ConfigurationButton colorScheme="red" title="Editar" icon={RiDeleteBinLine}/>
        </HStack>)}
      </Td>
    </Tr>
  );
} 