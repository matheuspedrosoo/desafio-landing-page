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
        textDecoration='none'
        _hover={{
          fontWeight: 'bold',
          color: 'primary',
        }}
      >
        <MenuItem>
          <Link href='#'>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href='#'>Quem somos</Link>
        </MenuItem>
        <MenuItem>
          <Link href='#'>Planos</Link>
        </MenuItem>
        <MenuItem>
          <Link href='#'>Fale conosco</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
