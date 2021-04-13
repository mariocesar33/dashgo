import { HStack, Button, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

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
        <PaginationItem number={1} isCurrent />

        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={6} />
        <PaginationItem number={7} />
      </HStack>
    </HStack>
  );
}