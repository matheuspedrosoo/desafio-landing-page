import { Box, Grid, Flex, Text, Image } from '@chakra-ui/react';

export function SectionWhoWeAre() {
  return (
    <Box w='100%' maxWidth={1440} mx='auto'>
      <Grid templateColumns='repeat(2, 1fr)' gap={0} h={954} bg='gray.50'>
        <Box h='100vh'>
          <Flex direction='column'>
            <Image
              src='image45.svg'
              alt='image45'
              w='450px'
              h='450px'
              ml='167px'
              mt='88px'
            />

            <Box>
              <Text
                fontFamily='Nunito'
                fontWeight='700'
                fontSize='22px'
                lineHeight='30.01px'
                color='blue'
                textTransform='uppercase'
                ml='135px'
                mt='37px'
              >
                QUER SER APROVADO?
              </Text>

              <Text
                w='575.12px'
                h='121.47px'
                fontFamily='Nunito'
                fontWeight='700'
                fontSize='44.83px'
                lineHeight='61.15px'
                color='primary'
                ml='135px'
                mt='13.53px'
              >
                Se seu foco é ser aprovado, nós estamos aqui por você.
              </Text>
              <Text
                w='598px'
                h='157px'
                fontFamily='Inter'
                fontWeight='400'
                fontSize='20px'
                lineHeight='37.1px'
                color='gray.200'
                ml='135px'
                mt='13.53px'
              >
                Somos um cursinho online especialista em ensinar matemática.
                Temos os melhores professores mestres e doutores para tirar suas
                dúvidas e te ensinar matemática desde a teoria até a resolução
                de exercícios de todos os níveis.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box h='100vh'>
          <Flex direction='column'>
            <Box>
              <Text
                fontFamily='Nunito'
                fontWeight='700'
                fontSize='22px'
                lineHeight='30.01px'
                color='blue'
                textTransform='uppercase'
                mt='37px'
              >
                100% MATEMÁTICA
              </Text>

              <Text
                w='575.12px'
                h='121.47px'
                fontFamily='Nunito'
                fontWeight='700'
                fontSize='44.83px'
                lineHeight='61.15px'
                color='primary'
                mt='13.53px'
              >
                Matemática para quem quer entrar na facul.
              </Text>
              <Text
                w='598px'
                h='157px'
                fontFamily='Inter'
                fontWeight='400'
                fontSize='20px'
                lineHeight='37.1px'
                color='gray.200'
                mt='13.53px'
              >
                Somos um cursinho online especialista em ensinar matemática.
                Temos os melhores professores mestres e doutores para tirar suas
                dúvidas e te ensinar matemática desde a teoria até a resolução
                de exercícios de todos os níveis.
              </Text>
            </Box>
            <Image
              src='image43.svg'
              alt='image43'
              w='430.2px'
              h='468.21px'
              //transform='rotate(-12.24deg)'
              ml='162px'
              mt='-45px'
            />

            <Image
              src='Ellipse22.svg'
              alt='Ellipse'
              w='229px'
              h='14px'
              mt='-40px'
              ml='265px'
            />
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
