import { Button, Icon, ButtonProps as ButtonConf } from '@chakra-ui/react';
import { ElementType } from 'react';

interface ConfigurationButtonProps extends ButtonConf {
  title: string;
  icon: ElementType
}

export function ConfigurationButton({ title, icon, ...rest}: ConfigurationButtonProps) {
  return(
    <Button 
      as="a"
      size="sm"
      fontSize="sm"
      leftIcon={<Icon as={icon} fontSize="16"/>}
      {...rest}
    >
      {title}
    </Button>
  );
}