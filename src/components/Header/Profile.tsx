import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
    showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
    <Flex
        align='center'
    >
        {showProfileData && (
        <Box mr='4' textAlign='right'>
            <Text>Don Bob</Text>
            <Text color='gray.300' fontSize='sm'>bob@don.com</Text>
        </Box>
        )}

        <Avatar size='md' name='Don Bob' src='https://github.com/gabrielcedran.png'/>
    </Flex>
    )
}