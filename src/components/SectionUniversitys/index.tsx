import { Image, Box, useBreakpointValue } from '@chakra-ui/react';

export function SectionUniversitys() {
  const isCurrent = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      border='1px solid transparent'
      //w='100%'
      //width={1440}
      // h={738}
      maxWidth={['375', '1440']}
      mx='auto'
      align='center'
      justify='center'
      bg='#FFFFFF'
    >
      {isCurrent ? (
        <Image src='print.svg' alt='print' w={1270} h={164} mt='58px' />
      ) : (
        <Image src='print2.svg' alt='print' w={335} h={164} mt='58px' />
      )}
    </Box>
  );
}
