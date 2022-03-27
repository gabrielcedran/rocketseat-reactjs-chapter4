import { Input as ChakraInput, InputProps as ChackraInputProps, FormControl, FormLabel } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

type InputProps = {
    name: string;
    label?: string; 
} & ChackraInputProps

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...otherProps}, ref) => {
    return (
    <FormControl>
        {!!label && (<FormLabel htmlFor={name}>{label}</FormLabel>)}

        <ChakraInput
          name={name} 
          id={name}
          focusBorderColor="pink.500" 
          bgColor="gray.900" 
          variant="filled"
          _hover={{bgColor: 'gray.900'}}
          size='lg'
          {...otherProps}
          ref={ref}
        />
      </FormControl>

    );
}

export const Input = forwardRef(BaseInput);