import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

// if I were using interface: interface NavLinkProps extends LinkProps {...}
type NavLinkProps = {
    icon: ElementType; // when receiving as an element instead of component (RiContactsLine vs <RiContactsLine />).
    children: string;
} & LinkProps

export function NavLink({icon, children, ...otherLinkProps}: NavLinkProps) {
    return (
        <Link display='flex' {...otherLinkProps}>
            <Icon as={icon} fontSize='20'/>
            <Text ml='4' fontWeight='medium'>{children}</Text>
        </Link>
    );
}