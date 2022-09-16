import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Procedimentosclinicop2 = () => {

    document.title = "Contas Hospitalares | Checklist dos Procedimentos Clinico";

    let navigate = useNavigate()

    const irProcedimentosClinico = async () => {
        navigate("/procedimentosclinicop1", { replace: true })
    }

    const irProcedimentosClinicoP3 = async () => {
        navigate("/procedimentosclinicop3", { replace: true })
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
                                                Diagnostico por Imagem Parte 2
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}} >PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CATE PED</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.11.02.002-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>RM CRANIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.07.20.006-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>RM CORACAO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.07.20.001-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>RM TORAX</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.07.20.003-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>RM BILIAR</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.07.03.004-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TC DE CRANIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.06.10.007-09</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TC DE TORAX</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.06.20.003-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ECG</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.11.02.003-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1' >
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Diagnostico por Imagem Parte 3
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}} >PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>AORTOGRA ABDO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.004-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>AORTOGRA TORAX</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.005-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CPRE ENDOSCOP</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.09.01.001-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PORTOGRAFIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.016-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PORT TRANSHE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.020-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ART CEREBRAL 4V</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.001-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ART HEMORRA CERE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.010-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ARTERIO SEL/VAS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.015-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1' >
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Diagnostico por Imagem Parte 4
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}} >PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ARTERIO CAROTI</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.013-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ARTERIO CERV/TO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.006-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ART SEL/CAT</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.09.01.014-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ARTERIO PELV</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.012-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ART MEBRO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.007-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ART AORTA ABDOM</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.009-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ART ISQUEMI CERE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.01.011-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CPRE TRANSCULT</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.10.02.001-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1' >
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Diagnostico por Imagem Parte 5
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='30vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>RETOSSIGMOIDE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.09.01.005-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COLONOSCOPIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.09.01.002-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PORTOGRAFIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.09.01.016-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TC AB SUP</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.06.30.001-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TC PELV</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.06.30.003-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1' >
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Radiografia Parte 1
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ARCADA ZIGOMATICA-MALAR</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.01.004-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ARTICULACAO TEMPORO-MANDIBULAR BILATERAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.01.005-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CAVUM</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.01.006-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CRANIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.01.008-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>OSSOS DA FACE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.01.012-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>SEIOS DA FACE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.01.014-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COLUNA CERVICAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.04.02.003-4</td>
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
                        <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center' w='60vw' paddingBottom='2vh'>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' onClick={irProcedimentosClinico} >Voltar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' >Salvar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irProcedimentosClinicoP3} >Proximo</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Procedimentosclinicop2