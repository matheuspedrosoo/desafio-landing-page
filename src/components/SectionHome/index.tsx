import { Flex, Box, Image, Text } from '@chakra-ui/react';

export function SectionHome() {
  return (
    <Flex
      border='1px solid red'
      width={1440}
      height={821}
      left={0}
      top={79}
      mx='auto'
      bg='primary'
    >
      <Box
        w={741.6}
        h={645.98}
        l={-8}
        t={276.68}
        mt={100}
        ml={20}
        bg='#292663'
        borderRadius={124}
        transform='rotate(-15.22deg)'
      >
        <Flex align='center' transform='rotate(15.22deg)' ml={120} mt={140}>
          <Image w={50.02} h={36.06} src='image3.svg' alt='image3' />
          <Text
            color='secundary'
            fontFamily='Inter'
            fontSize='20.59px'
            fontWeight={700}
            lineHeight='25.59px'
            ml={23}
          >
            {' '}
            Seja aprovado no Enem e Vestibulares :)
          </Text>

          <Text>
            o que aprender <span>.</span>
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
