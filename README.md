# rocketseat-reactjs-chapter4

## Creating a new nextjs project

Run the command `yarn create next-app {app_name}` and clean up what comes out of the box but won't be used.

Add typescript `yarn add -D typescript  @types/react @types/node`, change `.js` files to `.tsx` or `.ts` and declare types where necessary.


## Declarative UI

The concept of declarative ui has been around for a while (it was heavily used on the first android versions). With design systems gaining popularity due to companies seeking to standardise their UIs, declaritive UI libraries become a sensible choice for its facility to integrate with them - reuse styles consistently in different places of the application of even in different applications.  

Examples: themeui, tailwind and chakra.

Besides the UI standarisation that these libraries provide through its vast number of components, they also usually come other concerns like a11y already addressed.

Alternatives: vanilla css, sass, css modules (with and without sass) and css in js (e.g styled components).

### Installing Chakra UI

`yarn add @chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion`

_Chakra is build on top of emotion. Chakra also uses framer-motion for animations_

Customisation on Chakra's base styles is done via the `theme.ts` file (base colours, fonts, etc). 