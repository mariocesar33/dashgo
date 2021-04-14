import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
  name: string;
  email: string;
  avatarURL?: string;
}

export function Profile({ name, email, avatarURL, showProfileData = true }: ProfileProps) {
  return(
    <Flex alignItems="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>{name}</Text>
          <Text color="gray.300">{email}</Text>
        </Box>
      )}

      <Avatar size="md" name={name} src={avatarURL} />
    </Flex>
  );
}