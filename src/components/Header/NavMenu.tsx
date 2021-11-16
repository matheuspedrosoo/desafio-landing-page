import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export function NavMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
        mr='25.63px'
      />
      <MenuList
        fontFamily='Inter'
        color='gray.200'
        fontSize='16px'
        decoration='none'
      >
        <MenuItem
          _hover={{
            color: 'primary',
            textShadow: '1px 0px 0px black',
          }}
        >
          <Link href='#home'>Home</Link>
        </MenuItem>
        <MenuItem
          _hover={{
            color: 'primary',
            textShadow: '1px 0px 0px black',
          }}
        >
          <Link href='#whoweare'>Quem somos</Link>
        </MenuItem>
        <MenuItem
          _hover={{
            color: 'primary',
            textShadow: '1px 0px 0px black',
          }}
        >
          <Link href='#plans'>Planos</Link>
        </MenuItem>
        <MenuItem
          _hover={{
            color: 'primary',
            textShadow: '1px 0px 0px black',
          }}
        >
          <Link href='#contact'>Fale conosco</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
