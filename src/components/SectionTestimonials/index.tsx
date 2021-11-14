import { Flex, Box, Text, Image, Button } from '@chakra-ui/react';

export function SectionTestimonials() {
  return (
    <Box
      border='1px solid transparent'
      bg='white'
      w='100%'
      maxWidth={1440}
      mx='auto'
    >
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
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices
            blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.{' '}
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
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices
            blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.{' '}
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
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices
            blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.{' '}
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
    </Box>
  );
}
