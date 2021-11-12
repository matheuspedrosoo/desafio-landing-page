import { Flex, Button } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1440}
      h={79}
      mx='auto'
      align='center'
      justify='space-between'
      bg='#FFFFFF'
    >
      <Logo />

      <Flex align='center'>
        <NavLink href='#' title='Home' mr={42} />
        <NavLink title='Quem sonos' mr={37} />
        <NavLink title='Planos' mr={37} />
        <NavLink title='Fale conosco' mr={37} />

        <Button
          type='button'
          mr={68}
          bg='#252160'
          w={133}
          h={43}
          color='#FFFFFF'
          fontFamily='inter'
          fontWeight='700'
          align='center'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
