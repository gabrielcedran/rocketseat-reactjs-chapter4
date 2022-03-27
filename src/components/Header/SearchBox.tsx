import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
    // this approach is known as controlled components - in case there is a side-effect while the text is being input it is important apply the concept of debounce 
    //const [searchText, setSearchText] = useState('');

    // uncontrolled components is an approach that the value of the component is accessed when necessary instead of proactively. It is achieved via ref hook  
    const searchInputRef = useRef<HTMLInputElement>(null)
    // usage
    //console.log(searchInputRef.current.value);
    //searchInputRef.current.focus()
    

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
                // controlled component approach
                //value={searchText}
                //onChange={event => {setSearchText(event.target.value)}}
                ref={searchInputRef}
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