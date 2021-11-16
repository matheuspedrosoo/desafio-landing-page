import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

export function SectionTestimonials() {
  const isCurrent = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      border='1px solid transparent'
      bg='white'
      w='100%'
      maxWidth={['375', '1440']}
      mx='auto'
    >
      {isCurrent ? (
        <>
          <Text
            mt='102px'
            ml='135px'
            fontFamily='Nunito'
            fontWeight='700'
            fontSize='22px'
            lineHeight='31.4px'
            color='blue'
            textTransform='uppercase'
          >
            DEPOIMENTOS
          </Text>

          <Text
            w='829px'
            h='95px'
            mt='16.1px'
            ml='135px'
            fontFamily='Nunito'
            fontWeight='700'
            fontSize='44.83px'
            lineHeight='48.06px'
            color='primary'
          >
            Recomendados por <br /> quem é expert no assunto
          </Text>

          <Flex>
            <Button
              w='50px'
              h='50px'
              border='1px solid #252160'
              borderRadius='50%'
              bg='transparent'
              ml='70px'
              mt='181px'
              _hover={{
                bg: 'transparent',
              }}
            >
              <Image src='Vector.svg' alt='vector' />
            </Button>

            <Box
              ml='15px'
              mt='70px'
              w='370px'
              h='270px'
              borderRadius='10px'
              boxShadow='0px 1px 4px rgba(0, 0, 0, 0.22)'
              color='white'
            >
              <Flex mt='22.71px' ml='27.69px'>
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelam.svg' alt='estrela pela metade' />
              </Flex>

              <Text
                w='320px'
                h='100px'
                mt='13.69px'
                ml='25px'
                fontFamily='Inter'
                fontWeight='400'
                fontSize='16px'
                lineHeight='24px'
                color='gray.200'
              >
                Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                Ultrices blandit pelle ntesque nibh arcu elementum odio justo.
                Rhoncus.{' '}
              </Text>

              <Flex>
                <Image src='amanda.svg' alt='amanda' ml='25px' />

                <Flex direction='column'>
                  <Text
                    w='151px'
                    h='30px'
                    ml='15px'
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize='20px'
                    lineHeight='30px'
                    color='primary'
                  >
                    Amanda Merien
                  </Text>
                  <Text
                    w='85px'
                    h='20px'
                    mt='1px'
                    ml='15px'
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='12.8px'
                    lineHeight='19.2px'
                    color='gray.200'
                  >
                    Analista junior
                  </Text>
                </Flex>

                <Image src='aspas.svg' alt='aspas' ml='41.92px' />
              </Flex>
            </Box>

            {/* *************************   Box 2    ********************************* */}

            <Box
              ml='30px'
              mt='70px'
              w='370px'
              h='270px'
              borderRadius='10px'
              boxShadow='0px 1px 4px rgba(0, 0, 0, 0.22)'
              color='white'
            >
              <Flex mt='22.71px' ml='27.69px'>
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelam.svg' alt='estrela pela metade' />
              </Flex>

              <Text
                w='320px'
                h='100px'
                mt='13.69px'
                ml='25px'
                fontFamily='Inter'
                fontWeight='400'
                fontSize='16px'
                lineHeight='24px'
                color='gray.200'
              >
                Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                Ultrices blandit pelle ntesque nibh arcu elementum odio justo.
                Rhoncus.{' '}
              </Text>

              <Flex>
                <Image src='lucas.svg' alt='lucas' ml='25px' />

                <Flex direction='column'>
                  <Text
                    w='151px'
                    h='30px'
                    ml='15px'
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize='20px'
                    lineHeight='30px'
                    color='primary'
                  >
                    Lucas Correia
                  </Text>
                  <Text
                    w='85px'
                    h='20px'
                    mt='1px'
                    ml='15px'
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='12.8px'
                    lineHeight='19.2px'
                    color='gray.200'
                  >
                    CEO / Creative IT
                  </Text>
                </Flex>

                <Image src='aspas.svg' alt='aspas' ml='41.92px' />
              </Flex>
            </Box>

            {/* *************************   Box 3    ********************************* */}

            <Box
              ml='30px'
              mt='70px'
              w='370px'
              h='270px'
              borderRadius='10px'
              boxShadow='0px 1px 4px rgba(0, 0, 0, 0.22)'
              color='white'
            >
              <Flex mt='22.71px' ml='27.69px'>
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelac.svg' alt='estrela cheia' />
                <Image src='estrelam.svg' alt='estrela pela metade' />
              </Flex>

              <Text
                w='320px'
                h='100px'
                mt='13.69px'
                ml='25px'
                fontFamily='Inter'
                fontWeight='400'
                fontSize='16px'
                lineHeight='24px'
                color='gray.200'
              >
                Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                Ultrices blandit pelle ntesque nibh arcu elementum odio justo.
                Rhoncus.{' '}
              </Text>

              <Flex>
                <Image src='amanda.svg' alt='amanda' ml='25px' />

                <Flex direction='column'>
                  <Text
                    w='151px'
                    h='30px'
                    ml='15px'
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize='20px'
                    lineHeight='30px'
                    color='primary'
                  >
                    Rodrigo Godoy
                  </Text>
                  <Text
                    w='85px'
                    h='20px'
                    mt='1px'
                    ml='15px'
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='12.8px'
                    lineHeight='19.2px'
                    color='gray.200'
                  >
                    Presidente / Amazon
                  </Text>
                </Flex>

                <Image src='aspas.svg' alt='aspas' ml='41.92px' />
              </Flex>
            </Box>
            <Button
              w='50px'
              h='50px'
              border='1px solid #252160'
              borderRadius='50%'
              bg='transparent'
              ml='15px'
              mt='181px'
              _hover={{
                bg: 'transparent',
              }}
            >
              <Image src='Vector2.svg' alt='vector' />
            </Button>
          </Flex>
        </>
      ) : (
        <Box maxWidth='375px'>
          <Text
            mt='89.01px'
            // ml='51px'

            fontFamily='Nunito'
            fontWeight='700'
            fontSize='20px'
            lineHeight='27.28px'
            color='blue'
            textTransform='uppercase'
            textAlign='center'
          >
            DEPOIMENTOS
          </Text>

          <Text
            w='373px'
            h='44px'
            mt='4px'
            //ml='51px'
            fontFamily='Nunito'
            fontWeight='700'
            fontSize='18px'
            lineHeight='21.78px'
            color='primary'
            textAlign='center'
          >
            Recomendados por <br /> quem é expert no assunto
          </Text>

          <Box
            ml='18px'
            mt='24px'
            w='340px'
            h='248.11px'
            borderRadius='9.19px'
            boxShadow='0px 0.918919px 3.67568px rgba(0, 0, 0, 0.22)'
            color='white'
          >
            <Flex mt='25.46px' ml='27.69px'>
              <Image
                mt='25.46px'
                src='estrelac.svg'
                alt='estrela cheia'
                mr='12.38px'
                h='18px'
              />
              <Image
                mt='25.46px'
                src='estrelac.svg'
                alt='estrela cheia'
                mr='12.38px'
                h='18px'
              />
              <Image
                mt='25.46px'
                src='estrelac.svg'
                alt='estrela cheia'
                mr='12.38px'
                h='18px'
              />
              <Image
                mt='25.46px'
                src='estrelac.svg'
                alt='estrela cheia'
                mr='12.38px'
                h='18px'
              />
              <Image
                mt='25.46px'
                src='estrelam.svg'
                alt='estrela pela metade'
                mr='12.38px'
                h='18px'
              />
            </Flex>

            <Text
              w='294.05px'
              h='91.89px'
              mt='12.58px'
              ml='22.97px'
              fontFamily='Inter'
              fontWeight='400'
              fontSize='12px'
              lineHeight='22.05px'
              color='gray.200'
            >
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices
              blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.{' '}
            </Text>

            <Flex>
              <Image
                src='amanda.svg'
                alt='amanda'
                ml='22.97px'
                mt='22.97px'
                w='55.14'
                h='55.14'
              />

              <Flex direction='column'>
                <Text
                  w='138.76px'
                  h='27.57px'
                  mt='27.57'
                  ml='13.78px'
                  fontFamily='Inter'
                  fontWeight='500'
                  fontSize='18px'
                  lineHeight='27.57px'
                  color='primary'
                >
                  Amanda Merien
                </Text>
                <Text
                  w='80px'
                  h='18px'
                  mt='0.92px'
                  ml='13.78px'
                  fontFamily='Inter'
                  fontWeight='400'
                  fontSize='12px'
                  lineHeight='17.64px'
                  color='gray.200'
                >
                  Analista junior
                </Text>
              </Flex>

              <Image
                src='aspas.svg'
                alt='aspas'
                ml='38.52px'
                w='40.96'
                h='31.42'
                mt='35.61px'
              />
            </Flex>
          </Box>

          <Flex>
            <Button
              w='41px'
              h='41px'
              border='0.62px solid #252160'
              borderRadius='50%'
              bg='transparent'
              ml='156px'
              mt='24px'
              _hover={{
                bg: 'transparent',
              }}
            >
              <Image src='Vector.svg' alt='vector' />
            </Button>

            <Button
              w='41px'
              h='41px'
              border='0.62px solid #252160'
              borderRadius='50%'
              bg='transparent'
              mt='24px'
              _hover={{
                bg: 'transparent',
              }}
            >
              <Image src='Vector2.svg' alt='vector' />
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
