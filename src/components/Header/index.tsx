import { Flex, Button, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';

export function Header() {
  const isCurrent = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as='header'
      // w='100%'
      //maxWidth={1440}
      maxWidth={['375', '1440']}
      //h={79}
      h={['69', '79']}
      mx='auto'
      align='center'
      justify='space-between'
      bg='#FFFFFF'
    >
      <Logo showLogo={isCurrent} />

      <Flex align='center'>
        {isCurrent ? (
          <>
            <NavLink href='#' title='Home' mr={42} />
            <NavLink title='Quem somos' mr={37} />
            <NavLink title='Planos' mr={37} />
            <NavLink title='Fale conosco' mr={37} />
          </>
        ) : (
          <NavMenu />
        )}

        {isCurrent && (
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
        )}
      </Flex>
    </Flex>
  );
}
