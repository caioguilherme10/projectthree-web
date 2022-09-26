import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Procedimentosclinicop3 = () => {

    document.title = "Contas Hospitalares | Checklist dos Procedimentos Clinico";

    let navigate = useNavigate()

    const irProcedimentosClinico = async () => {
        navigate("/procedimentosclinicop2", { replace: true })
    }

    const irProcedimentosClinicoP4 = async () => {
        navigate("/procedimentosclinicop4", { replace: true })
    }

    return (
        <Flex w='100vw' h='100vh' direction='column'>
            <Box display='flex' alignItems='center' justifyContent='flex-start' w='100vw' h='10vh' bg='blue.900' paddingLeft='4vw'>
                <Heading color='white' as='h4' size='md'>Contas Hospitalares</Heading>
            </Box>
            <Box display='flex' w='100vw' h='90vh' flexDirection='row'>
                <Box display='flex' flexDirection='column' alignItems='center' w='20vw' bgGradient='linear(to-b, blue.600, blue.900)'>
                    <Box display='flex' flexDirection='row' paddingBottom='4' paddingTop='4'>
                        <Box>
                            <Avatar name='Caio Guilherme' src='' />
                        </Box>
                        <Box display='flex' flexDirection='column' paddingLeft='2'>
                            <Text color='white'>Caio Guilherme</Text>
                            <Text color='white'>Analista</Text>
                        </Box>
                    </Box>
                    <Divider w='15vw' />
                    <Box paddingBottom='2' paddingTop='10'>
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Novo Checklist</Button>
                    </Box>
                    <Box paddingBottom='2'>
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Abertos</Button>
                    </Box>
                    <Box paddingBottom='2'>
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Correções</Button>
                    </Box>
                    <Box>
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Dados</Button>
                    </Box>
                    <Spacer />
                    <Box paddingBottom='10'>
                        <Button w='15vw' backgroundColor='red.900' variant='solid' color='white' _hover={{bg: '#E53E3E'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Sair</Button>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' w='90vw' bg='gray.400'>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' w='80vw' h='88vh' bg='white' borderRadius='md' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' > 
                        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='end' w='75vw' h='6vh' paddingBottom='0.5vh'>
                            <Text color='blue.900'>Informações - Procedimentos</Text>
                            <Text color='blue.900'>CLINICO</Text>
                        </Box>
                        <Divider w='75vw' border='2px' borderColor='blue.900' borderRadius='md' />
                        <Box w='75vw'>
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1' marginTop='1'>
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Radiografia Parte 2
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COLUNA LOMBO-SACRA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.02.006-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COLUNA TORACIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.02.009-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COLUNA TORACO-LOMBAR</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.02.010-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>REGIAO SACRO-COCCIGEA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.02.012-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PANORAMICA DE COLUNA TOTAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.02.013-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COSTELAS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.03.007-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TORAX (APICO-LORDOTICA)</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.03.012-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TORAX (PA+INSP+EXP+LATERAL)</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.03.013-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1'>
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Radiografia Parte 3
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TORAX (PA+LATERAL+OBLIQUA)</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.03.014-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TORAX (PA+PERFIL)</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.03.015-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CLAVICULA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.04.006-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COTOVELO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.04.007-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>DEDOS DA MAO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.04.008-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>MAO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.04.009-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>MAO E PUNHO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.04.010-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ESCAPULA/OMBRO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.04.011-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1'>
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Radiografia Parte 4
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PUNHO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.04.012-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ABDOME SIMPLES</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.05.013-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ABDOME AGUDO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.05.012-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ESCANOMETRIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.003-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ARTICULACAO COXO-FEMORAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.006-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ARTICULACAO SACRO-ILIACA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.007-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ARTICULACAO TIBIO-TARSICA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.008-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>BACIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.009-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1'>
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Radiografia Parte 5
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='45vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CALCANEO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.010-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COXA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.011-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>JOELHO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.012-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TORAX (PA)</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.03.017-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ANTEBRACO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.04.001-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>BRACO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.04.005-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>JOELHO/PATELA (AP+LAT+AXIAL)</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.013-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PE/DEDOS DO PE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.015-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PERNA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.06.016-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                        <Spacer />
                        <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center' w='75vw' paddingBottom='2vh'>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' onClick={irProcedimentosClinico} >Voltar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' >Salvar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irProcedimentosClinicoP4} >Proximo</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Procedimentosclinicop3