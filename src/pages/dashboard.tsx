import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';
import { Chart } from '../components/Chart';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex 
        width="100%" 
        maxWidth={1480} 
        marginY="6" 
        marginX="auto"  
        paddingX="6"
      >
        <Sidebar />
        
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box 
            padding={["6", "8"]} 
            backgroundColor="gray.800" 
            borderRadius={8} 
            paddingBottom="4"
          >
            <Text fontSize="lg">Inscritos da semana</Text>
            <Chart />
          </Box>

          <Box 
            padding={["6", "8"]} 
            background="gray.800" 
            borderRadius={8} 
            paddingBottom="4"
          >
            <Text fontSize="lg">Taxa de abertura</Text>
            <Chart />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}