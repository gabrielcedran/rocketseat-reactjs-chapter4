import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        // in order to deal with responsiveness, chakra allows an array of sizes to be provided. The first element is for the smallest breakpoint (or UI)
        // the second for the one after, etc. In case a size is not provided for each breakpoint the last provided one will be used for all
        // the bigger breakpoints. https://chakra-ui.com/docs/styled-system/features/responsive-styles
        // Example 1:  fontSize={['2xl', '3xl']}  - 2xl will be used for sm screens and 3xl for md onwards
        // Example 2: fontSize={['2xl', '3xl', 5xl]} - 2xl for sm, 3xl for md and 5xl for lg onwards.
        // It is possible to define custom breakpoints on top of the default ones defined by chakra
        <Text 
            fontSize={['2xl', '3xl']} 
            fontWeight='bold' 
            letterSpacing='tight'
            w='64'
        >
            dashgo
            <Text as='span' ml='1' color='pink.500'>.</Text>
        </Text>
    )
}