import { Flex, Box, Image, Text, Link, Icon, Grid } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

export function SectionHome() {
  return (
    <Flex width={1440} height={821} left={0} top={79} mx='auto' bg='primary'>
      <Grid templateColumns='repeat(2, 1fr)' gap={4}>
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
          <Flex
            align='center'
            transform='rotate(15.22deg)'
            //ml={120}
            ml={94}
            mt={120}
          >
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
          </Flex>

          <Flex
            direction='column'
            align='center'
            transform='rotate(15.22deg)'
            ml={5}
            mt={10}
          >
            <Flex w={631} h={400} ml={-20} direction='column'>
              <Text
                w={631}
                //h={151}
                mt={36.03}
                fontFamily='Fredoka One'
                fontSize={65.15}
                color='white'
              >
                o que aprender
                <Text display='inline-block' color='secundary'>
                  .
                </Text>
              </Text>
              <Box w={523} h={87} mt='32px'>
                <Text
                  // mt='32px'
                  // border='1px solid green'
                  // w={523}
                  // h={87}
                  fontFamily='Inter'
                  //fontWeight='700'
                  //fontStyle='normal'
                  fontSize='19.45px'
                  letterSpacing='0.38px'
                  lineHeight='29px'
                  color='white'
                  // ml={-40}
                >
                  Aqui você terá toda assistência que precisa
                  <Text
                    fontFamily='Inter'
                    fontWeight='400'
                    fontStyle='normal'
                    fontSize='19.45px'
                    letterSpacing='0.38px'
                    lineHeight='29px'
                    color='white'
                  ></Text>
                  com materiais desenvolvido por
                  <Text
                    display='inline'
                    fontFamily='DM Sans'
                    fontWeight='700'
                    fontStyle='normal'
                    fontSize='19.45px'
                    letterSpacing='0.38px'
                    lineHeight='29px'
                    color='white'
                  >
                    {' '}
                    mestres e doutores em matemática{' '}
                  </Text>
                </Text>
              </Box>
              <Link
                mt='32px'
                w={380.41}
                h={59.33}
                bg='secundary'
                color='primary'
                p='15px 10px'
                fontFamily='Inter'
                fontWeight='700'
                borderRadius='6px'
              >
                <Flex direction='row' align='center' justify='center'>
                  <Text> Veja nossos planos </Text>
                  <Icon as={FiArrowRight} fontSize={20} ml='32px' />
                </Flex>
              </Link>
            </Flex>
          </Flex>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.79px'
            lineHeight='208px'
            letterSpacing='-1.82609px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(6.63deg)'
            mt='-195px'
            ml='650px'
          >
            $
          </Text>
        </Box>

        <Box h={821}>
          <Image
            src='Home.svg'
            alt='home'
            mt='140px'
            ml='-105px'
            position='absolute'
            zIndex='1'
          />

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.91px'
            lineHeight='207.91px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(-25.97deg)'
            mt='242px'
            mr='74px'
          >
            \
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(55.26deg)'
            mt='-368px'
            mr='270px'
          >
            $
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(33.31deg)'
            mt='-400px'
            mr='10px'
          >
            $
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(-34.05deg)'
            mt='570px'
            ml='300px'
          >
            20
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(7.88deg)'
            mt='-500px'
            ml='350px'
          >
            20
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(-8.63deg)'
            mt='-10px'
            ml='-300px'
          >
            10
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(33.31deg)'
            // mt='-710px'
            // mr='-540px'
            //nova config
            position='absolute'
            mt='-710px'
            ml='480px'
          >
            10
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(33.31deg)'
            // mt='-110px'
            // mr='-195px'
            position='absolute'
            mt='-620px'
            ml='310px'
          >
            10
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(-8.63deg)'
            // mt='-120px'
            // mr='-500px'
            position='absolute'
            mt='-515px'
            ml='510px'
          >
            *
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(-8.63deg)'
            // mt='75px'
            // ml='95px'
            position='absolute'
            mt='-242px'
            ml='300px'
          >
            *
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(-8.63deg)'
            mt='-445px'
            ml='-275px'
          >
            %
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(33.31deg)'
            mt='-608px'
            mr='-310px'
          >
            %
          </Text>

          <Text
            fontFamily='Inter'
            fontWeight='100'
            fontSize='171.795px'
            lineHeight='208px'
            letterSpacing='-1.83px'
            textAlign='center'
            color='rgba(255, 255, 255, 0.05)'
            transform=' rotate(-8.63deg)'
            // mt='390px'
            // mr='-570px'
            position='absolute'
            mt='390px'
            ml='530px'
          >
            $
          </Text>
        </Box>
      </Grid>
    </Flex>
  );
}
