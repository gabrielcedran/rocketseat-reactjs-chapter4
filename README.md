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

`yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion`

_Chakra is build on top of emotion. Chakra also uses framer-motion for animations_

Customisation on Chakra's base styles is done via the `theme.ts` file (base colours, fonts, etc). 

### Installing apex charts

Apex charts lib has some good looking charts. To install the dependency `yarn add apexcharts react-apexcharts` (the second is for the integration with react).

Apex charts relies on window api to work thus server side rendering will fail. To deter nextjs from trying to render it on the server side, it is necessary to use the dynamic function:

```
import dynamic from "next/dynamic";
...
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
...
<Chart/>


// instead of 
import Chart from 'react-apexcharts';
```

### Libraries to help with forms

For small forms using vanilla controlled or uncontrolled components might suffice. However for bigger forms in bigger projects using a library to help the creation and management of forms is a wise decision.

Three good libraries are Formik, React Hook Form and Unform. The main differences between them are:

Formik was the most popular for a while but React Hook Form has been gaining popularity since the introduction of hooks. The main painpoint of formik is that it has a rather rigid api in opposition to reack hook form.

Unform is a library that is focused on performance for huge forms - where sometimes the other two libs suffer a bit.

For this project React Hook Form will be used.

#### Passing refs as parameter to components

One of the problems of passing refs to other components is to determine where that ref should be applied AND react does not support refs as part of the component props.

To be able to to so it is necessary to use the component ForwardRefRenderFunction - check the commit for more details.

#### Extension to more comprehensive and intricate validations (schema validation) and casts

Yup is a library that provides form validation (schema validation) and cast. It has a nice integration with react hook form. `yarn add yup @hookform/resolvers`.