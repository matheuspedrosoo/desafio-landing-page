import {
  Grid,
  Flex,
  Image,
  Text,
  Box,
  Link,
  Icon,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

export function SectionAbout() {
  const isCurrent = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box w='100%' maxWidth={1440} mx='auto'>
      <Grid templateColumns='repeat(2, 1fr)' gap={24} bg='#FFFFFF'>
        {isCurrent ? (
          <Box>
            <Flex>
              <Image
                mt='104px'
                ml={112}
                src='Group53.svg'
                alt='group'
                w='67.79px'
                h='403.63px'
              />
              <Flex direction='column' ml='34.21px' mt='104px' h='420px'>
                <Box>
                  <Text
                    fontFamily='Inter'
                    fontWeight='600'
                    fontSize='22px'
                    lineHeight='30.12px'
                    color='primary'
                  >
                    100% focado na Matemática
                  </Text>

                  <Text
                    as='p'
                    w='489.54px'
                    h='121.21px'
                    fontFamily='Inter'
                    //fontWeight='400'
                    fontSize='19px'
                    lineHeight='30.12px'
                    color='gray.200'
                    mt='9.01px'
                  >
                    Todo material é construído por profissionais especializados
                    e com foco no perfil de <Text> {'  '} </Text>cada
                    vestibular.
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontFamily='Inter'
                    fontWeight='600'
                    fontSize='22px'
                    lineHeight='30.12px'
                    color='primary'
                    //mt='46.78px'
                    mt='15.78px'
                  >
                    Acompanhamento de perto!
                  </Text>
                  <Text
                    as='p'
                    w='403px'
                    h='101px'
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='19px'
                    lineHeight='30.12px'
                    color='gray.200'
                    mt='9px'
                  >
                    Todo o suporte que você precisa para aprender o conteúdo dos
                    principais vestibulares!
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontFamily='Inter'
                    fontWeight='600'
                    fontSize='22px'
                    lineHeight='30.12px'
                    color='primary'
                    //mt='40.39px'
                    mt='17px'
                  >
                    Matemática de um jeito fácil!
                  </Text>
                  <Text
                    as='p'
                    w='510.72px'
                    h='90.61px'
                    fontFamily='Inter'
                    //fontWeight='400'
                    fontSize='19px'
                    lineHeight='30.12px'
                    color='gray.200'
                    mt='9.39px'
                  >
                    Resolução instantânea de qualquer equação{' '}
                    <Text> {'  '} </Text> algébrica na plataforma, além de
                    vídeos, apostilas, simulados e central de dúvidas 24h!
                  </Text>
                </Box>

                <Flex mt='30px' w='100%' ml='-104px' justify='flex-start'>
                  <Link
                    mt='14px'
                    w='313px'
                    h='60px'
                    bg='primary'
                    color='white'
                    p='15px 10px'
                    fontFamily='DM Sans'
                    fontWeight='700'
                    fontSize='17.45px'
                    borderRadius='6px'
                    justify='flex-start'
                  >
                    <Flex direction='row' align='center' justify='center'>
                      <Text> Quero ser aprovado </Text>
                      <Icon as={FiArrowRight} fontSize={20} ml='32.57px' />
                    </Flex>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        ) : (
          <Box width={375} bg='#FFFFFF'>
            <Box
              border='2.04px solid #3AFFE5'
              borderRadius='50%'
              w='67.79px'
              h='67.79px'
              bg='#FFFFFF'
              ml='152.6px'
              mt='34px'
            >
              <Image
                mt='15px'
                ml='15px'
                src='raizquadrada.svg'
                alt='raizquadrada'
                w='30px'
                h='30px'
              />
            </Box>

            <Text
              //w='246px'
              w='100%'
              h='31px'
              fontFamily='Inter'
              fontWeight='600'
              fontSize='18px'
              lineHeight='30.12px'
              color='primary'
              mt='8px'
              ml='63.5px'
            >
              100% focado na Matemática
            </Text>

            <Text
              as='p'
              w='253px'
              h='60px'
              fontFamily='Inter'
              fontSize='12px'
              lineHeight='14.52px'
              color='gray.200'
              mt='8px'
              textAlign='center'
              ml='63.5px'
            >
              Todo material é construído por profissionais especializados e com
              foco no perfil de <Text> {'  '} </Text>cada vestibular.
            </Text>

            {/* Box2 */}

            <Box
              display='block'
              border='2.04px solid #3AFFE5'
              borderRadius='50%'
              w='67.79px'
              h='67.79px'
              bg='#FFFFFF'
              ml='152.6px'
              mt='27.21px'
            >
              <Image
                mt='17px'
                ml='17px'
                src='acompanhamento.svg'
                alt='acompanhamento'
                w='30px'
                h='30px'
              />
            </Box>

            <Box>
              <Text
                //w='246px'
                w='100%'
                h='31px'
                fontFamily='Inter'
                fontWeight='600'
                fontSize='18px'
                lineHeight='30.12px'
                color='primary'
                mt='8px'
                ml='63.5px'
              >
                Acompanhamento de perto!
              </Text>

              <Text
                as='p'
                w='253px'
                h='60px'
                fontFamily='Inter'
                fontSize='12px'
                lineHeight='14.52px'
                color='gray.200'
                mt='8px'
                textAlign='center'
                ml='63.5px'
              >
                Todo o suporte que você precisa para aprender o conteúdo dos
                principais vestibulares!
              </Text>
            </Box>

            {/* Box3 */}

            <Box
              display='block'
              border='2.04px solid #3AFFE5'
              borderRadius='50%'
              w='67.79px'
              h='67.79px'
              bg='#FFFFFF'
              ml='152.6px'
              mt='27.21px'
            >
              <Image
                mt='17px'
                ml='17px'
                src='matematica.svg'
                alt='matematica'
                w='30px'
                h='30px'
              />
            </Box>

            <Text
              //w='246px'
              w='100%'
              h='31px'
              fontFamily='Inter'
              fontWeight='600'
              fontSize='18px'
              lineHeight='30.12px'
              color='primary'
              mt='8px'
              ml='63.5px'
            >
              Matemática de um jeito fácil!
            </Text>

            <Text
              as='p'
              w='253px'
              h='60px'
              fontFamily='Inter'
              fontSize='12px'
              lineHeight='14.52px'
              color='gray.200'
              mt='8px'
              textAlign='center'
              ml='63.5px'
            >
              Resolução instantânea de qualquer equação algébrica na plataforma,
              além de vídeos, apostilas, simulados e central de dúvidas 24h!
            </Text>

            <Button
              mt='93.21px'
              ml='39px'
              w='297px'
              h='57px'
              bg='primary'
              color='white'
              //p='15px 10px'
              borderRadius='6px'
              mb='43px'
            >
              <Flex align='center' justify='center' aling='center'>
                <Text
                  w='149px'
                  h='22px'
                  fontFamily='DM Sans'
                  fontWeight='700'
                  fontSize='16.58px'
                  lineHeight='21.58px'
                  letterSpacing='-0.59px'
                >
                  Quero ser aprovado
                </Text>
                <Icon as={FiArrowRight} fontSize={20} ml='30.94px' />
              </Flex>
            </Button>
          </Box>
        )}

        {isCurrent && (
          <Box>
            <Image
              w='691px'
              boxSize='738px'
              src='pretty.svg'
              alt='pretty'
              objectFit='cover'
            />{' '}
          </Box>
        )}
      </Grid>
    </Box>
  );
}
