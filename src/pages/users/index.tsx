import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiEditLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />
            <Flex
                w='100%' 
                my='6'
                maxW={1480} 
                mx='auto'
                px='6'
            >
                <Sidebar />
                <Box
                    flex='1'
                    borderRadius={8}
                    bgColor='gray.800'
                    padding='8'
                >
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>User List</Heading>
                        <Link href='/users/create' passHref>
                            <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} fontSize='20'></Icon>}>Add new user</Button>
                        </Link>
                    </Flex>
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4','4','6']} color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink'></Checkbox>
                                </Th>
                                <Th>
                                    User
                                </Th>
                                {isWideScreen && 
                                (<Th>
                                    Creation Date
                                </Th>
                                )}
                                <Th w='6'>

                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={['4','4','6']}>
                                    <Checkbox colorScheme='pink'></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Don</Text>
                                        <Text fontSize='sm' color='gray.300'>don@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideScreen && 
                                (<Td>
                                    April 21st, 2021
                                </Td>)}
                                <Td>
                                    <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiEditLine}/>}>{isWideScreen ? 'Edit' : ''}</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={['4','4','6']}>
                                    <Checkbox colorScheme='pink'></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Bob</Text>
                                        <Text fontSize='sm' color='gray.300'>bob@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideScreen && 
                                (<Td>
                                    April 21st, 2021
                                </Td>)}
                                <Td>
                                    <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiEditLine}/>}>{isWideScreen ? 'Edit' : ''}</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}