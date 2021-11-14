import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: '#FFFFFF',
    primary: '#252160',
    blue: '#32B5FF',
    secundary: '#3AFFE5',
    gray: {
      '200': '#7B7B7B',
      '100': '#E5E5E5',
      '50': '#F8F8F8',
    },
  },
  fonts: {
    header: ['Fredoka One', 'DM Sans', 'Nunito', 'Nunito Sans', 'Inter'],
    body: ['Fredoka One', 'DM Sans', 'Nunito', 'Nunito Sans', 'Inter'],
    footer: ['Fredoka One', 'DM Sans', 'Nunito', 'Nunito Sans', 'Inter'],
  },
  styles: {
    global: {
      body: {
        background: '#E5E5E5',
      },
    },
  },
});
