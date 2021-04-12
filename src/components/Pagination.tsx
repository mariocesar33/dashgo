import { HStack, Button, Box } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack
      spacing="6"
      marginTop="8"
      alignItems="center"
      justifyContent="space-between" 
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ background: 'pink.500', cursor: 'default'}}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          background="gray.700"
          _hover={{ background: 'gray.500'}}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          background="gray.700"
          _hover={{ background: 'gray.500'}}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          background="gray.700"
          _hover={{ background: 'gray.500'}}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}