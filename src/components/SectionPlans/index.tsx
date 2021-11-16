import {
  Box,
  Grid,
  Flex,
  Text,
  Image,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

export function SectionPlans() {
  const isCurrent = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box id='plans' w='100%' maxWidth={['375', '1440']} mx='auto'>
      <Grid templateColumns='repeat(2, 1fr)' gap={6} bg='white'>
        {isCurrent ? (
          <>
            <Flex direction='column' ml='135px'>
              <Text
                fontFamily='Nunito'
                fontWeight='700'
                fontSize='22px'
                lineHeight='30.01px'
                color='blue'
                textTransform='uppercase'
                mt='70px'
              >
                NOSSOS PLANOS
              </Text>
              <Text
                fontFamily='Nunito'
                fontWeight='700'
                fontSize='44.83px'
                lineHeight='61.15px'
                color='primary'
                mt='18px'
              >
                Invista no seu futuro
              </Text>
              {/* estou aqui ******************  */}
              <Box
                w='570px'
                h='692px'
                bg='primary'
                borderRadius='18px'
                mt='58px'
              >
                <Flex>
                  <Flex direction='column' ml='53px'>
                    <Text
                      w='333.69px'
                      h='31.9px'
                      mt='63px'
                      fontFamily='Nunito'
                      fontWeight='700'
                      fontSize='22px'
                      lineHeight='31.4px'
                      color=' #3C5882'
                    >
                      1 ano de acesso
                    </Text>
                    <Text
                      fontFamily='Nunito'
                      fontWeight='700'
                      fontSize='30px'
                      lineHeight='48.06px'
                      color='white'
                    >
                      Plano Recomendado
                    </Text>
                  </Flex>

                  <Flex
                    align='center'
                    justify='center'
                    w='160px'
                    h='160px'
                    mt='37px'
                    mr='16px'
                    position='relative'
                  >
                    <Image src='Star.svg' alt='start' />

                    <Flex direction='column' position='absolute'>
                      <Box
                        w='98.5px'
                        h='88.49pxpx'
                        //mt='28px'
                        ml='42px'
                        mr='19.5px'
                      >
                        <Flex direction='column'>
                          <Text
                            w='81.46px'
                            h='65px'
                            ml='10px'
                            mt='10px'
                            fontFamily='Nunito Sans'
                            fontWeight='800'
                            fontSize='37px'
                            lineHeight='65px'
                            color='primary'
                            transform=' rotate(19.52deg)'
                          >
                            70%
                          </Text>

                          <Text
                            w='81px'
                            h='65px'
                            mt='-35px'
                            ml='-6px'
                            transform=' rotate(18.22deg)'
                            fontFamily='Nunito Sans'
                            fontStyle='normal'
                            fontWeight='300'
                            fontSize='15px'
                            lineHeight='65px'
                            color='primary'
                          >
                            de desconto
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>

                <Box ml='53px'>
                  <Flex direction='column'>
                    <Text
                      fontFamily='Nunito'
                      fontWeight='700'
                      fontSize='22px'
                      lineHeight='31.4px'
                      color='blue'
                    >
                      vantagens
                    </Text>

                    <Flex direction='column' mt='31.1px'>
                      <Box w='449px'>
                        <Flex>
                          <Text
                            w='12.47px'
                            h='11.18px'
                            color='white'
                            fontWeight='bold'
                          >
                            ✓
                          </Text>
                          <Text
                            w='333px'
                            h='63px'
                            ml='20.6px'
                            fontFamily='Nunito Sans'
                            fontWeight='300'
                            fontSize='15.81px'
                            lineHeight='31.4px'
                            color='white'
                          >
                            Acesso a todos os benefícios da Plataforma
                            (Videoaulas, Exercícios, Apostilas e muito mais)
                          </Text>
                        </Flex>
                      </Box>

                      <Box w='449px' mt='14px'>
                        <Flex>
                          <Text
                            w='12.47px'
                            h='11.18px'
                            color='white'
                            fontWeight='bold'
                          >
                            ✓
                          </Text>
                          <Text
                            w='333px'
                            h='32px'
                            ml='20.6px'
                            fontFamily='Nunito Sans'
                            fontWeight='300'
                            fontSize='15.81px'
                            lineHeight='31.4px'
                            color='white'
                          >
                            36 aulas ao vivo
                          </Text>
                        </Flex>
                      </Box>

                      <Box w='449px' mt='14px'>
                        <Flex>
                          <Text
                            w='12.47px'
                            h='11.18px'
                            color='white'
                            fontWeight='bold'
                          >
                            ✓
                          </Text>
                          <Text
                            w='333px'
                            h='32px'
                            ml='20.6px'
                            fontFamily='Nunito Sans'
                            fontWeight='300'
                            fontSize='15.81px'
                            lineHeight='31.4px'
                            color='white'
                          >
                            Revisão para o ENEM
                          </Text>
                        </Flex>
                      </Box>

                      <Box w='449px' mt='14px'>
                        <Flex>
                          <Text
                            w='12.47px'
                            h='11.18px'
                            color='white'
                            fontWeight='bold'
                          >
                            ✓
                          </Text>
                          <Text
                            w='328px'
                            h='32px'
                            ml='20.6px'
                            fontFamily='Nunito Sans'
                            fontWeight='300'
                            fontSize='15.81px'
                            lineHeight='31.4px'
                            color='white'
                          >
                            Grupo no Whatsapp com professores e alunos
                          </Text>
                        </Flex>
                      </Box>

                      <Box w='449px' mt='14px'>
                        <Flex>
                          <Text
                            w='12.47px'
                            h='11.18px'
                            color='white'
                            fontWeight='bold'
                          >
                            ✓
                          </Text>
                          <Text
                            w='415px'
                            h='32px'
                            ml='20.6px'
                            fontFamily='Nunito Sans'
                            fontWeight='300'
                            fontSize='15.81px'
                            lineHeight='31.4px'
                            color='white'
                          >
                            Reforço para FUVEST, Unicamp e Vestibulares de
                            Medicina
                          </Text>
                        </Flex>
                      </Box>

                      <Box mt='40px' w='450px' h='80px'>
                        <Flex align='center' justify='space-between'>
                          <Flex>
                            <Text
                              fontFamily='Nunito Sans'
                              fontWeight='600'
                              fontSize='20px'
                              lineHeight='65px'
                              color='secundary'
                            >
                              R$
                            </Text>

                            <Text
                              ml='5px'
                              w='140px'
                              h='40px'
                              mt='-20px'
                              fontFamily='Nunito Sans'
                              fontWeight='300'
                              fontSize='15px'
                              lineHeight='65px'
                              color='rgba(255, 255, 255, 0.45)'
                            >
                              de R$178,80
                            </Text>

                            <Text
                              ml='-140px'
                              mt='20px'
                              fontFamily='Nunito Sans'
                              fontWeight='800'
                              fontSize='37px'
                              lineHeight='65px'
                              color='white'
                            >
                              49,90
                            </Text>
                            <Text
                              mt='30px'
                              ml='5px'
                              fontFamily='Nunito Sans'
                              fontWeight='400'
                              fontSize='14px'
                              lineHeight='65px'
                              color='rgba(255, 255, 255, 0.45)'
                            >
                              /ano
                            </Text>
                            <Text
                              mt='55px'
                              ml='-165px'
                              fontFamily='Nunito Sans'
                              fontWeight='400'
                              fontSize='14px'
                              lineHeight='65px'
                              color='rgba(255, 255, 255, 0.45)'
                            >
                              {' '}
                              Menos de 5 reais por mês :)
                            </Text>
                          </Flex>

                          <Button
                            w='199px'
                            h='60px'
                            borderRadius='6px'
                            p='15px, 116px, 15px, 116px'
                            background=' linear-gradient(145.09deg, #26E9CF 11.81%, #25CDE1 95.89%)'
                            boxShadow='-1.16333px 1.16333px 6.98px rgba(0, 0, 0, 0.26)'
                            fontFamily='DM Sans'
                            fontWeight='700'
                            fontSize='17.45px'
                            lineHeight='22.72px'
                            color='white'
                            mr='5px'
                          >
                            Eu quero!
                          </Button>
                        </Flex>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Flex>

            <Box
              w='570px'
              h='692px'
              bg='white'
              borderRadius='18px'
              mt='237px'
              border='1px solid rgba(32, 30, 84, 0.18)'
            >
              <Flex direction='column' mt='63px' ml='36px'>
                <Text
                  fontFamily='Nunito'
                  fontWeight='700'
                  fontSize='22px'
                  lineHeight='22px'
                  color='#3C5882'
                >
                  6 meses de acesso
                </Text>
                <Text
                  mt='9.1px'
                  fontFamily='Nunito'
                  fontWeight='700'
                  fontSize='30px'
                  lineHeight='48.06px'
                  color='primary'
                >
                  Plano Aprovado
                </Text>

                <Text
                  mt='44px'
                  fontFamily='Nunito'
                  fontWeight='700'
                  fontSize='22px'
                  lineHeight='31.4px'
                  color='blue'
                >
                  vantagens
                </Text>

                <Flex>
                  <Text
                    w='12.47px'
                    h='11.18px'
                    color='primary'
                    mt='31.1px'
                    fontWeight='bold'
                  >
                    ✓
                  </Text>
                  <Text
                    mt='31.1px'
                    w='220px'
                    h='32px'
                    ml='20.6px'
                    fontFamily='Nunito '
                    fontWeight='400'
                    fontSize='15.81px'
                    lineHeight='31.4px'
                    color='primary'
                  >
                    Acesso a todos as video aulas
                  </Text>
                </Flex>

                <Flex>
                  <Text
                    w='12.47px'
                    h='11.18px'
                    color='primary'
                    mt='14px'
                    fontWeight='bold'
                  >
                    ✓
                  </Text>
                  <Text
                    mt='14px'
                    w='343px'
                    h='63px'
                    ml='20.6px'
                    fontFamily='Nunito'
                    fontWeight='400'
                    fontSize='15.81px'
                    lineHeight='31.4px'
                    color='primary'
                  >
                    Ganhe pontos resolvendo questões e troque por prêmios
                  </Text>
                </Flex>

                <Flex>
                  <Text
                    w='12.47px'
                    h='11.18px'
                    color='primary'
                    mt='14px'
                    fontWeight='bold'
                  >
                    ✓
                  </Text>
                  <Text
                    mt='14px'
                    w='300px'
                    h='32px'
                    ml='20.6px'
                    fontFamily='Nunito '
                    fontWeight='400'
                    fontSize='15.81px'
                    lineHeight='31.4px'
                    color='primary'
                  >
                    3.000 exercícios com resolucão em vídeo
                  </Text>
                </Flex>

                <Flex>
                  <Text
                    w='12.47px'
                    h='11.18px'
                    color='primary'
                    mt='14px'
                    fontWeight='bold'
                  >
                    ✓
                  </Text>
                  <Text
                    mt='14px'
                    w='400px'
                    h='32px'
                    ml='20.6px'
                    fontFamily='Nunito '
                    fontWeight='400'
                    fontSize='15.81px'
                    lineHeight='31.4px'
                    color='primary'
                  >
                    4 apostilas com todo o conteúdo de Matemática
                  </Text>
                </Flex>

                <Flex>
                  <Text
                    w='12.47px'
                    h='11.18px'
                    color='primary'
                    mt='14px'
                    fontWeight='bold'
                  >
                    ✓
                  </Text>
                  <Text
                    mt='14px'
                    w='450px'
                    h='32px'
                    ml='20.6px'
                    fontFamily='Nunito '
                    fontWeight='400'
                    fontSize='15.81px'
                    lineHeight='31.4px'
                    color='primary'
                  >
                    Reforço para FUVEST, Unicamp e Vestibulares de Medicina
                  </Text>
                </Flex>
              </Flex>

              <Box mt='54px' w='490px' h='150px'>
                <Flex align='center' justify='space-between'>
                  <Flex>
                    <Text
                      fontFamily='Nunito Sans'
                      fontWeight='600'
                      fontSize='20px'
                      lineHeight='65px'
                      color='secundary'
                      ml='36px'
                    >
                      R$
                    </Text>

                    <Text
                      ml='10px'
                      mt='20px'
                      fontFamily='Nunito Sans'
                      fontWeight='800'
                      fontSize='37px'
                      lineHeight='65px'
                      color='primary'
                    >
                      39,90
                    </Text>
                    <Text
                      mt='30px'
                      ml='5px'
                      fontFamily='Nunito '
                      fontWeight='700'
                      fontSize='15px'
                      lineHeight='65px'
                      color='primary'
                    >
                      /semestre
                    </Text>
                  </Flex>

                  <Button
                    w='231,5px'
                    h='69,8px'
                    borderRadius='6px'
                    padding='30px 116px 25px 140px'
                    background='primary'
                    boxShadow='-1.16333px 1.16333px 6.98px rgba(0, 0, 0, 0.26)'
                    fontFamily='DM Sans'
                    fontWeight='700'
                    fontSize='17.45px'
                    lineHeight='22.72px'
                    letterSpacing='-0.62px'
                    color='white'
                    mt='18px'
                    ml='52px'
                  >
                    <Text ml='-20px'> Eu quero!</Text>
                  </Button>
                </Flex>
              </Box>
            </Box>
          </>
        ) : (
          <Box id='plans' width='375px' h='930px'>
            <Flex direction='column' ml='51px'>
              <Text
                w='273px'
                h='22px'
                fontFamily='Nunito'
                fontWeight='700'
                fontSize='20px'
                lineHeight='27.28px'
                color='blue'
                textTransform='uppercase'
                mt='41px'
                textAlign='center'
              >
                NOSSOS PLANOS
              </Text>
              <Text
                w='273px'
                h='22px'
                fontFamily='Inter'
                fontWeight='600'
                fontSize='18px'
                lineHeight='21.78px'
                color='primary'
                mt='4px'
                textAlign='center'
              >
                Invista no seu futuro
              </Text>
            </Flex>
            {/* ********** CARD  ************* */}

            <Box
              w='319.59px'
              h='387.99px'
              bg='primary'
              borderRadius='10.0923px'
              mt='34px'
              ml='28px'
            >
              <Flex>
                <Flex direction='column' ml='53px'>
                  <Text
                    w='187.09px'
                    h='17.88px'
                    mt='35.32px'
                    fontFamily='Nunito'
                    fontWeight='400'
                    fontSize='12px'
                    lineHeight='15.06px'
                    color=' #3C5882'
                  >
                    1 ano de acesso
                  </Text>
                  <Text
                    fontFamily='Nunito Sans'
                    fontWeight='400'
                    fontSize='16px'
                    lineHeight='21.82px'
                    color='white'
                  >
                    Plano Recomendado
                  </Text>
                </Flex>

                <Flex
                  align='center'
                  justify='center'
                  w='89.71px'
                  h='89.71px'
                  mt='20.75px'
                  mr='8.97px'
                  position='relative'
                >
                  <Image src='Star.svg' alt='start' />

                  <Flex direction='column' position='absolute'>
                    <Box
                      w='98.5px'
                      h='88.49pxpx'
                      //mt='28px'
                      ml='42px'
                      mr='19.5px'
                    >
                      <Flex direction='column'>
                        <Text
                          w='44px'
                          h='27px'
                          ml='22.09px'
                          // mt='-05px'
                          fontFamily='Nunito Sans'
                          fontWeight='800'
                          fontSize='20px'
                          lineHeight='27.28px'
                          color='primary'
                          transform=' rotate(19.52deg)'
                        >
                          70%
                        </Text>

                        <Text
                          w='43px'
                          h='11px'
                          mt='-05x'
                          ml='15px'
                          transform=' rotate(18.22deg)'
                          fontFamily='Nunito Sans'
                          fontWeight='300'
                          fontSize='8px'
                          lineHeight='10.91px'
                          color='primary'
                        >
                          de desconto
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>

              <Box ml='40px' mt='-10px'>
                <Flex direction='column'>
                  <Text
                    fontFamily='Nunito'
                    fontWeight='700'
                    fontSize='12px'
                    lineHeight='16.37px'
                    color='blue'
                  >
                    vantagens
                  </Text>

                  <Flex direction='column'>
                    <Box w='449px' mt='17.44px'>
                      <Flex align='center'>
                        <Image
                          mt='-20px'
                          w='6.99px'
                          h='6.27px'
                          color='white'
                          src='certo.svg'
                          alt='certo'
                        />

                        <Text
                          w='227px'
                          h='35px'
                          ml='20.6px'
                          fontFamily='Nunito Sans'
                          fontWeight='400'
                          fontSize='9px'
                          lineHeight='17.6px'
                          color='white'
                        >
                          Acesso a todos os benefícios da Plataforma
                          (Videoaulas, Exercícios, Apostilas e muito mais)
                        </Text>
                      </Flex>
                    </Box>

                    <Box w='449px' mt='14px'>
                      <Flex>
                        <Image
                          mt='4px'
                          w='6.99px'
                          h='6.27px'
                          color='white'
                          src='certo.svg'
                          alt='certo'
                        />

                        <Text
                          w='183.76px'
                          h='17.94px'
                          ml='20.6px'
                          fontFamily='Nunito Sans'
                          fontWeight='400'
                          fontSize='9px'
                          lineHeight='17.6px'
                          color='white'
                        >
                          36 aulas ao vivo
                        </Text>
                      </Flex>
                    </Box>

                    <Box w='449px' mt='14px'>
                      <Flex>
                        <Image
                          mt='4px'
                          w='6.99px'
                          h='6.27px'
                          color='white'
                          src='certo.svg'
                          alt='certo'
                        />
                        <Text
                          w='166.76px'
                          h='17.94px'
                          ml='20.6px'
                          fontFamily='Nunito Sans'
                          fontWeight='400'
                          fontSize='9px'
                          lineHeight='17.6px'
                          color='white'
                        >
                          Revisão para o ENEM
                        </Text>
                      </Flex>
                    </Box>

                    <Box w='449px' mt='14px'>
                      <Flex>
                        <Image
                          mt='4px'
                          w='6.99px'
                          h='6.27px'
                          color='white'
                          src='certo.svg'
                          alt='certo'
                        />
                        <Text
                          w='189.76px'
                          h='17.94px'
                          ml='20.6px'
                          fontFamily='Nunito Sans'
                          fontWeight='400'
                          fontSize='9px'
                          lineHeight='17.6px'
                          color='white'
                        >
                          Grupo no Whatsapp com professores e alunos
                        </Text>
                      </Flex>
                    </Box>

                    <Box w='449px' mt='14px'>
                      <Flex>
                        <Image
                          mt='4px'
                          w='6.99px'
                          h='6.27px'
                          color='white'
                          src='certo.svg'
                          alt='certo'
                        />
                        <Text
                          w='232.68px'
                          h='17.94px'
                          ml='20.6px'
                          fontFamily='Nunito Sans'
                          fontWeight='400'
                          fontSize='9px'
                          lineHeight='17.6px'
                          color='white'
                        >
                          Reforço para FUVEST, Unicamp e Vestibulares de
                          Medicina
                        </Text>
                      </Flex>
                    </Box>

                    <Box mt='40px' w='450px' h='80px'>
                      <Flex align='center' justify='space-between'>
                        <Flex>
                          <Text
                            fontFamily='Nunito Sans'
                            fontWeight='600'
                            fontSize='11.21px'
                            lineHeight='36.44px'
                            color='secundary'
                            mt='-10px'
                          >
                            R$
                          </Text>

                          <Text
                            ml='15px'
                            w='140px'
                            h='11px'
                            mt='-10px'
                            fontFamily='Nunito Sans'
                            fontWeight='300'
                            fontSize='8px'
                            lineHeight='10.91px'
                            color='rgba(255, 255, 255, 0.45)'
                          >
                            de R$178,80
                          </Text>

                          <Text
                            ml='-140px'
                            mt='-3px'
                            fontFamily='Nunito Sans'
                            fontWeight='800'
                            fontSize='20px'
                            lineHeight='27.28px'
                            color='white'
                          >
                            49,90
                          </Text>
                          <Text
                            mt='2px'
                            ml='5px'
                            fontFamily='Nunito '
                            fontWeight='700'
                            fontSize='8px'
                            lineHeight='10.91px'
                            color='rgba(255, 255, 255, 0.45)'
                          >
                            /ano
                          </Text>
                          <Text
                            mt='26px'
                            ml='-102px'
                            fontFamily='Nunito Sans'
                            fontWeight='400'
                            fontSize='8px'
                            lineHeight='10.91px'
                            color='rgba(255, 255, 255, 0.45)'
                          >
                            {' '}
                            Menos de 5 reais por mês :)
                          </Text>
                        </Flex>

                        <Button
                          w='111.58px'
                          h='33.67px'
                          borderRadius='6px'
                          // p='15px 116px 15px 116px'
                          background=' linear-gradient(145.09deg, #26E9CF 11.81%, #25CDE1 95.89%)'
                          boxShadow='-1.16333px 1.16333px 6.98px rgba(0, 0, 0, 0.26)'
                          fontFamily='DM Sans'
                          fontWeight='700'
                          fontSize='10px'
                          lineHeight='13.02px'
                          letterSpacing='-0.35px'
                          color='white'
                          mr='200px'
                          mt='-10px'
                        >
                          Eu quero!
                        </Button>
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Box>

              {/* ***************************** CARD 2 ***************************************** */}
              <Box
                w='319.59px'
                h='387.99px'
                bg='#FFFFFF'
                borderRadius='10.0923px'
                //mt='23.01px'
                // ml='28px'
                border='0.560684px solid rgba(32, 30, 84, 0.18)'
              >
                <Flex direction='column' mt='35.32px' ml='20.18px'>
                  <Text
                    fontFamily='Nunito'
                    fontWeight='700'
                    fontSize='12px'
                    lineHeight='16.37px'
                    color='#3C5882'
                  >
                    6 meses de acesso
                  </Text>
                  <Text
                    mt='5.1px'
                    fontFamily='Nunito'
                    fontWeight='700'
                    fontSize='16px'
                    lineHeight='21.82px'
                    color='primary'
                  >
                    Plano Aprovado
                  </Text>

                  <Text
                    mt='24.67px'
                    fontFamily='Nunito'
                    fontWeight='700'
                    fontSize='12px'
                    lineHeight='16.37px'
                    color='blue'
                  >
                    vantagens
                  </Text>

                  <Flex>
                    <Image
                      mt='23.53px'
                      ml='25px'
                      w='6.99px'
                      h='6.27px'
                      color='primary'
                      src='certo2.svg'
                      alt='certo'
                    />
                    <Text
                      mt='20px'
                      w='150px'
                      h='12px'
                      ml='11.55px'
                      fontFamily='Nunito '
                      fontWeight='400'
                      fontSize='9px'
                      lineHeight='12.28px'
                      color='primary'
                    >
                      Acesso a todos as video aulas
                    </Text>
                  </Flex>

                  <Flex>
                    <Image
                      mt='23.53px'
                      ml='25px'
                      w='6.99px'
                      h='6.27px'
                      color='primary'
                      src='certo2.svg'
                      alt='certo'
                    />
                    <Text
                      mt='20px'
                      w='245.32px'
                      h='24px'
                      ml='11.55px'
                      fontFamily='Nunito'
                      fontWeight='400'
                      fontSize='9px'
                      lineHeight='12.28px'
                      color='primary'
                    >
                      Ganhe pontos resolvendo questões e troque por <br />{' '}
                      prêmios
                    </Text>
                  </Flex>

                  <Flex>
                    <Image
                      mt='23.53px'
                      ml='25px'
                      w='6.99px'
                      h='6.27px'
                      color='primary'
                      src='certo2.svg'
                      alt='certo'
                    />
                    <Text
                      mt='17.85px'
                      w='228.32px'
                      h='17.94px'
                      ml='11.55px'
                      fontFamily='Nunito '
                      fontWeight='400'
                      fontSize='9px'
                      lineHeight='17.6px'
                      color='primary'
                    >
                      3.000 exercícios com resolucão em vídeo
                    </Text>
                  </Flex>

                  <Flex>
                    <Image
                      mt='12px'
                      ml='25px'
                      w='6.99px'
                      h='6.27px'
                      color='primary'
                      src='certo2.svg'
                      alt='certo'
                    />
                    <Text
                      mt='7.85px'
                      w='239.32px'
                      h='17.94px'
                      ml='11.55px'
                      fontFamily='Nunito '
                      fontWeight='400'
                      fontSize='9px'
                      lineHeight='17.6px'
                      color='primary'
                    >
                      4 apostilas com todo o conteúdo de Matemática
                    </Text>
                  </Flex>

                  <Flex>
                    <Image
                      mt='12px'
                      ml='25px'
                      w='6.99px'
                      h='6.27px'
                      color='primary'
                      src='certo2.svg'
                      alt='certo'
                    />
                    <Text
                      mt='7.85px'
                      w='245.320px'
                      h='17.94px'
                      ml='11.55px'
                      fontFamily='Nunito '
                      fontWeight='400'
                      fontSize='9px'
                      lineHeight='17.6px'
                      color='primary'
                    >
                      Reforço para FUVEST, Unicamp e Vestibulares de Medicina
                    </Text>
                  </Flex>
                </Flex>

                <Box mt='54px' w='490px' h='150px'>
                  <Flex align='center' justify='space-between'>
                    <Flex>
                      <Text
                        fontFamily='Nunito Sans'
                        fontWeight='600'
                        fontSize='12px'
                        lineHeight='16.37px'
                        color='secundary'
                        ml='38.13px'
                        mt='-20px'
                      >
                        R$
                      </Text>

                      <Text
                        ml='10px'
                        mt='-15px'
                        fontFamily='Nunito Sans'
                        fontWeight='800'
                        fontSize='20px'
                        lineHeight='27.28px'
                        color='primary'
                      >
                        39,90
                      </Text>
                      <Text
                        mt='-10px'
                        ml='5px'
                        fontFamily='Nunito '
                        fontWeight='700'
                        fontSize='8px'
                        lineHeight='10.91px'
                        color='primary'
                      >
                        /semestre
                      </Text>
                    </Flex>

                    <Button
                      w='129.8px'
                      h='39.14px'
                      borderRadius='6px'
                      // padding='15px 116px '
                      background='primary'
                      boxShadow='-0.652262px 0.652262px 3.91357px rgba(0, 0, 0, 0.26)'
                      fontFamily='DM Sans'
                      fontWeight='700'
                      fontSize='13px'
                      lineHeight='22.72px'
                      letterSpacing=' -0.34666pxpx'
                      color='white'
                      // mt='18px'
                      mr='182px'
                    >
                      Eu quero!
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Grid>
    </Box>
  );
}
