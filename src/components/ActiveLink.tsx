import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { cloneElement, ReactElement } from "react"

type ActiveLinkProps = {
    shouldMatchExactPath?: boolean,
    children: ReactElement // ReactElement forces the type to be a react component (eg: a text or number would not be accept like on the ReactNode)
} & LinkProps

export function ActiveLink({children, shouldMatchExactPath = false, ...linkProps}: ActiveLinkProps) {

    const {asPath} = useRouter()

    let isActive = false;

    if (shouldMatchExactPath && (asPath === linkProps.href || asPath === linkProps.as)) {
        isActive = true;
    } else if (!shouldMatchExactPath && (asPath.startsWith(String(linkProps.href)) || asPath.startsWith(String(linkProps.as)))) {
        isActive = true;
    }

    return (
        <Link {...linkProps}>
            { cloneElement(children, 
                {color: isActive ? 'pink.400' : 'gray.50'}
            )}
        </Link>
    )
}