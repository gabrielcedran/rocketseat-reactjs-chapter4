import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

// if I were using interface: interface NavLinkProps extends LinkProps {...}
type NavLinkProps = {
    icon: ElementType; // when receiving as an element instead of component (RiContactsLine vs <RiContactsLine />).
    children: string;
    href: string;
} & LinkProps

export function NavLink({icon, children, href, ...otherLinkProps}: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref> 
        {/*next expects a proper link component (tag <a>) as a direct nested component. When it is not the case, 
        it is necessary to use the property passHref to force the correct behaviour (preview the link on mouse hover)*/}
            <ChakraLink display='flex' {...otherLinkProps}>
                <Icon as={icon} fontSize='20'/>
                <Text ml='4' fontWeight='medium'>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    );
}