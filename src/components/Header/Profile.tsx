import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return(
    <Flex alignItems="center">
      <Box marginRight="4" textAlign="right">
        <Text>Mário César</Text>
        <Text color="gray.300">mcsilva@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Mário César" src="https://avatars.githubusercontent.com/u/24758286?s=400&u=07b6e5e973ed27512ecf2552e1f46050cd9943dd&v=4" />
    </Flex>
  );
}