import { Box, Flex, Text, Image } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box bg='white' w='100%' maxWidth={1440} h='373px' mx='auto'>
      <Flex>
        <Flex direction='column'>
          <Image
            src='logoipsum2.svg'
            alt='logo'
            w='203.06px'
            h='38px'
            mt='86px'
            ml='145px'
          />
          <Image
            src='printFooter.svg'
            alt='logo'
            w='359px'
            h='68px'
            mt='53px'
            ml='145px'
          />
        </Flex>

        <Flex direction='column'>
          <Text
            mt='86px'
            ml='63px'
            fontFamily='Inter'
            fontWeight='500'
            fontSize='20px'
            lineHeight='30.59px'
            color='primary'
          >
            Localização
          </Text>
          <Text
            w='232.99px'
            h='60px'
            mt='13px'
            ml='63px'
            fontFamily='Inter'
            fontWeight='400'
            fontSize='17px'
            lineHeight='30px'
            color='gray.200'
          >
            Av. Brg. Faria Lima , 1422 São Paulo - SP{' '}
          </Text>
        </Flex>

        {/* Fale Conosco */}
        <Flex direction='column'>
          <Text
            mt='86px'
            ml='37.01px'
            fontFamily='Inter'
            fontWeight='500'
            fontSize='20px'
            lineHeight='37.5px'
            color='primary'
          >
            Fale conosco
          </Text>
          <Text
            w='129.66px'
            h='30px'
            mt='7px'
            ml='37.01px'
            fontFamily='Inter'
            fontWeight='400'
            fontSize='17px'
            lineHeight='30px'
            color='gray.200'
          >
            (22) 4442-0126
          </Text>

          <Text
            w='165.12px'
            h='30px'
            mt='7px'
            ml='37.01px'
            fontFamily='Inter'
            fontWeight='400'
            fontSize='17px'
            lineHeight='30px'
            color='gray.200'
          >
            info@digihouse.com
          </Text>
        </Flex>

        {/* POLÍTICAS */}
        <Flex direction='column'>
          <Text
            mt='86px'
            ml='35px'
            fontFamily='Inter'
            fontWeight='500'
            fontSize='20px'
            lineHeight='37.5px'
            color='primary'
          >
            Políticas
          </Text>
          <Text
            w='150.94px'
            h='30px'
            mt='9px'
            ml='35px'
            fontFamily='Inter'
            fontWeight='400'
            fontSize='17px'
            lineHeight='30px'
            color='gray.200'
          >
            Direitos autorais
          </Text>

          <Text
            w='165.12px'
            h='30px'
            mt='9px'
            ml='35px'
            fontFamily='Inter'
            fontWeight='400'
            fontSize='17px'
            lineHeight='30px'
            color='gray.200'
          >
            Termos de uso
          </Text>

          <Text
            w='197.53px'
            h='30px'
            mt='9px'
            ml='35px'
            fontFamily='Inter'
            fontWeight='400'
            fontSize='17px'
            lineHeight='30px'
            color='gray.200'
          >
            Políticas de Privacidade
          </Text>
        </Flex>
      </Flex>

      <Box
        w='1170px'
        borderTop='1px solid rgba(84, 84, 212, 0.34)'
        ml='135px'
        mt='30px'
      >
        <Flex mt='31px' justify='space-between'>
          <Flex>
            <Image
              src='copy.svg'
              alt='copy'
              w='20px'
              h='20px'
              color='gray.200'
            />

            <Text
              fontFamily='Work Sans'
              fontWeight='400'
              fontSize='16px'
              lineHeight='24.1px'
              color='gray.200'
              ml='20px'
            >
              Copyright 2021. All Right Reserved{' '}
            </Text>
          </Flex>

          <Flex align='center' mt='-15px' mr='-100px'>
            <Image
              src='socialMedias.svg'
              alt='medias'
              w='115px'
              h='22px'
              //mt='32px'
              //mr='-100px'
            />
            <Image
              src='Up.svg'
              alt='Up'
              w='58px'
              h='58px'
              color='primary'
              ml='45.75px'
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
