import { Box, Image, useBreakpointValue } from '@chakra-ui/react';

interface LogoProps {
  showLogo?: boolean;
}

export function Logo({ showLogo = true }: LogoProps) {
  return (
    <Box>
      {showLogo ? (
        <Image src='logoipsum-1.svg' ml='50px' alt='logo' />
      ) : (
        <Image src='Group54.svg' ml='25.89px' alt='logo' />
      )}
    </Box>
  );
}
