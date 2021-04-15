import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import { 
  FormControl, 
  FormErrorMessage, 
  FormLabel,  
  Input as ChakraInput, 
  InputProps as chakraInputProps 
} from '@chakra-ui/react';

interface InputProps extends chakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
= ({ name, label, error = null, ...rest }, ref) => {
  return(
    <FormControl isInvalid={!!error}>
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
      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);