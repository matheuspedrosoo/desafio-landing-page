import { Link, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  title: string;
}

export function NavLink({ title, ...rest }: NavLinkProps) {
  return (
    <Link
      zIndex='1'
      as='a'
      color='gray.200'
      fontSize='16px'
      _hover={{
        color: 'primary',
        textShadow: '1px 0px 0px black',
      }}
      {...rest}
    >
      <Text fontFamily='Inter'>{title}</Text>
    </Link>
  );
}
