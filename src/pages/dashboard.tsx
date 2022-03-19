import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
    return (
        <Flex direction='column' h='100vh'>
            <Header />

            <Flex w='100%' my='6' maxWidth='1480px' mx='auto' px='6'>
                <Sidebar />

                <SimpleGrid flex='1' gap='4' minChildWidth='320px'>
                    <Box 
                        p='8'
                        bg='gray.800'
                        borderRadius='8'
                    >
                        <Text fontSize='lg' mb='4'>Weekly subscriptions</Text>
                    </Box>
                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius='8'
                    >
                        <Text fontSize='lg' mb='4'>Opening rate</Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}