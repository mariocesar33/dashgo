import { forwardRef, ForwardRefRenderFunction } from 'react';

import { 
  FormControl, 
  FormLabel,  
  Input as ChakraInput, 
  InputProps as chakraInputProps 
} from '@chakra-ui/react';

interface InputProps extends chakraInputProps {
  name: string;
  label?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
= ({ name, label, ...rest }, ref) => {
  return(
    <FormControl>
      { !!label && <FormLabel htmlFor={label}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        background="gray.900"
        variant="filled"
        _hover={{
          background: "gray.900"
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);