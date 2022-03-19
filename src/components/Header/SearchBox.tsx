import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
    return(
        <Flex
            as='label'
            flex='1'
            py='4'
            px='8'
            ml='6'
            maxWidth={400}
            color='gray.200'
            bg='gray.800'
            borderRadius='full'
        >
            <Input 
                color='gray.50'
                variant='unstyled'
                px='4'
                mr='4'
                placeholder="Search"
                _placeholder={{ color: 'gray.400'}} 
            />

            {// chakra's recommendation when using third party icons is to wrap it with chakra's icon component 
            }
            <Icon as={RiSearchLine} fontSize="20"/>
        </Flex>
    )
}