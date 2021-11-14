import { Box, Grid, Text, Image, Flex, Link, Icon } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

export function SectionApp() {
  return (
    <Box
      border='1px solid transparent'
      bg='white'
      w='100%'
      maxWidth={1440}
      mx='auto'
    >
      <Grid
        bg='primary'
        mt='206px'
        templateColumns='repeat(2, 1fr)'
        gap={0}
        h={672}
      >
        <Image mt='-90px' ml='152px' src='Phone.svg' alt='phone' />

        <Box w='100%' h='672px'>
          <Flex>
            <Image
              mt='213px'
              ml='94px'
              w='50.02px'
              h='36.06px'
              src='image3.svg'
              alt='image3'
            />
            <Text
              w='472px'
              h='28px'
              mt='217.03px'
              ml='23px'
              fontFamily='Inter'
              fontWeight='700'
              fontSize='20.59px'
              lineHeight='25.59px'
              color='secundary'
            >
              Baixe aulas no app e estude offline
            </Text>
          </Flex>

          <Flex direction='column'>
            <Text
              mt='36.03px'
              ml='94px'
              w='523px'
              h='87px'
              fontFamily='Inter'
              fontWeight='400'
              fontSize='19.45px'
              lineHeight='29px'
              color='white'
            >
              Receba lembretes no seu celular e tenha a facilidade <br /> de
              estudar a qualquer hora e de qualquer lugar. <br />{' '}
              <Text fontFamily='Inter' fontWeight='600'>
                {' '}
                Baixe nosso app e confira.{' '}
              </Text>
            </Text>

            <Link
              mt='32px'
              ml='92px'
              w={380.41}
              h={59.33}
              bg='secundary'
              borderRadius='6px'
              padding='15px 116px'
            >
              <Flex ml='-30px' w='350px' h='23px' align='center'>
                <Text
                  color='primary'
                  fontFamily='DM Sans'
                  fontWeight='700'
                  fontSize='17.45px'
                  letterSpacing='-0.62px'
                >
                  Conheça nosso aplicativo
                </Text>
                <Icon as={FiArrowRight} fontSize={20} ml='32.57px' />
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}
