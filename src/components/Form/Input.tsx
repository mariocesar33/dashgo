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
export function Input({ name, label, ...rest }: InputProps) {
  return(
    <FormControl>
      { !!label && <FormLabel htmlFor="email">E-mail</FormLabel>}
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
        {...rest}
      />
    </FormControl>
  )
}