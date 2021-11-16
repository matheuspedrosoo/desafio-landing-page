import { Link, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  title: string;
}

export function NavLink({ title, ...rest }: NavLinkProps) {
  return (
    <Link
      color='gray.200'
      fontSize='16px'
      _hover={{
        fontWeight: 'bold',
        color: 'primary',
      }}
      {...rest}
    >
      <Text fontFamily='Inter'>{title}</Text>
    </Link>
  );
}
