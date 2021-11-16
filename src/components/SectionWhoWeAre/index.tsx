import {
  Box,
  Grid,
  Flex,
  Text,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';

export function SectionWhoWeAre() {
  const isCurrent = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box id='whoweare' w='100%' maxWidth={['375', '1440']} mx='auto'>
      <Grid templateColumns='repeat(2, 1fr)' gap={0} bg='gray.50'>
        {isCurrent ? (
          <>
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
                    Temos os melhores professores mestres e doutores para tirar
                    suas dúvidas e te ensinar matemática desde a teoria até a
                    resolução de exercícios de todos os níveis.
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
                    Temos os melhores professores mestres e doutores para tirar
                    suas dúvidas e te ensinar matemática desde a teoria até a
                    resolução de exercícios de todos os níveis.
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
          </>
        ) : (
          <>
            <Box w='375px' h='1247px'>
              <Flex direction='column'>
                <Box>
                  <Text
                    h='27px'
                    fontFamily='Nunito'
                    fontWeight='700'
                    fontSize='20px'
                    lineHeight='27.28px'
                    color='blue'
                    textTransform='uppercase'
                    mt='99px'
                    ml='92px'
                  >
                    100% MATEMÁTICA
                  </Text>

                  <Text
                    w='273px'
                    h='44px'
                    fontFamily='Inter'
                    fontWeight='600'
                    fontSize='18px'
                    lineHeight='21.78px'
                    color='primary'
                    mt='8px'
                    ml='51px'
                    textAlign='center'
                  >
                    Matemática para quem quer entrar na facul.
                  </Text>
                  <Text
                    w='253px'
                    h='90px'
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='12px'
                    lineHeight='14.52px'
                    color='gray.200'
                    mt='8px'
                    ml='61px'
                    textAlign='center'
                  >
                    Somos um cursinho online especialista em ensinar matemática.
                    Temos os melhores professores mestres e doutores para tirar
                    suas dúvidas e te ensinar matemática desde a teoria até a
                    resolução de exercícios de todos os níveis.
                  </Text>
                </Box>
                <Image
                  src='image45.svg'
                  alt='image45'
                  w='298px'
                  h='298px'
                  //transform='rotate(-12.24deg)'
                  ml='39px'
                  mt='69px'
                />
              </Flex>

              <Flex direction='column'>
                <Box>
                  <Text
                    fontFamily='Nunito'
                    fontWeight='700'
                    fontSize='20px'
                    lineHeight='27.28px'
                    color='blue'
                    textTransform='uppercase'
                    ml='72.5px'
                    mt='41px'
                  >
                    QUER SER APROVADO?
                  </Text>

                  <Text
                    w='273px'
                    h='44px'
                    fontFamily='Inter'
                    fontWeight='600'
                    fontSize='18px'
                    lineHeight='21.78px'
                    color='primary'
                    ml='51px'
                    mt='8px'
                    textAlign='center'
                  >
                    Se seu foco é ser aprovado, nós estamos aqui por você.
                  </Text>
                  <Text
                    w='253px'
                    h='90px'
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='12px'
                    lineHeight='14.52px'
                    color='gray.200'
                    ml='61px'
                    mt='8px'
                    textAlign='center'
                  >
                    Somos um cursinho online especialista em ensinar matemática.
                    Temos os melhores professores mestres e doutores para tirar
                    suas dúvidas e te ensinar matemática desde a teoria até a
                    resolução de exercícios de todos os níveis.
                  </Text>
                </Box>

                <Image
                  ml='50px'
                  src='image43.svg'
                  alt='image43'
                  w='286.28px'
                  h='312.24px'
                />
              </Flex>
            </Box>
          </>
        )}
      </Grid>
    </Box>
  );
}
