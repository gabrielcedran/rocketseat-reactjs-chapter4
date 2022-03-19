import { Input as ChakraInput, InputProps as ChackraInputProps, FormControl, FormLabel } from "@chakra-ui/react";

type InputProps = {
    name: string;
    label?: string; 
} & ChackraInputProps

export function Input({name, label, ...otherProps}: InputProps) {
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
        />
      </FormControl>

    );
}