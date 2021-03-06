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
      id='home'
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
            <Flex>
              <NavLink href='#home' title='Home' mr={42} />
              <NavLink href='#whoweare' title='Quem somos' mr={37} />
              <NavLink href='#plans' title='Planos' mr={37} />
              <NavLink href='#contact' title='Fale conosco' mr={37} />
            </Flex>
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
