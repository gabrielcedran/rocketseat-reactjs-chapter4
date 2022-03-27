import { Input as ChakraInput, InputProps as ChackraInputProps, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

type InputProps = {
    name: string;
    label?: string; 
    error?: FieldError
} & ChackraInputProps

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error = null, ...otherProps}, ref) => {
    return (
    <FormControl isInvalid={!!error}>
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

        {!!error && (
          <FormErrorMessage>{error.message}</FormErrorMessage>
        )}
      </FormControl>

    );
}

export const Input = forwardRef(BaseInput);