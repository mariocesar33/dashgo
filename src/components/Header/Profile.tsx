import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  name: string;
  email: string;
  avatarURL?: string;
}

export function Profile({ name, email, avatarURL }: ProfileProps) {
  return(
    <Flex alignItems="center">
      <Box marginRight="4" textAlign="right">
        <Text>{name}</Text>
        <Text color="gray.300">{email}</Text>
      </Box>

      <Avatar size="md" name="Mário César" src={avatarURL} />
    </Flex>
  );
}