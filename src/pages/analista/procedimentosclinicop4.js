import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Procedimentosclinicop4 = () => {

    document.title = "Contas Hospitalares | Checklist dos Procedimentos Clinico";

    let navigate = useNavigate()

    const irProcedimentosClinico = async () => {
        navigate("/procedimentosclinicop3", { replace: true })
    }

    const irProcedimentosClinicoP5 = async () => {
        navigate("/procedimentosclinicop5", { replace: true })
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
                                                Hemoderivados
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
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CON PLAQUET</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.06.02.007-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CRIOPRECIPITATO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.06.02.008-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PLASMA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.06.02.010-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COM HEMACIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.06.02.006-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PLAQUETAS APER</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.06.02.009-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>MOD IF I</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.12.01.002-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>MOD IF II</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.12.01.003-4</td>
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
                                                Medicações Especias
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='35vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>AGRASTAT</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>06.03.05.002-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ALBUMINA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>06.03.07.001-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>BERIPLEX</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>06.03.07.002-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>STREPLASE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>06.03.05.003-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>REOPRO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>06.03.05.001-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ISCOVER 75mg</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>06.03.05.010-7</td>
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
                                                Fisioterapia Parte 1
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '10%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                                <th style={{width: '40%', fontSize:'12px', border: '1px solid black'}}>NOME</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CLI/CARDIOVASC</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.04.003-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PRE/POS CIR CARDIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.05.003-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>RESP CP SIST</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.04.001-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>RESP SEM CP SIST</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.04.002-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>NEUROMOTRA CP SIS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.06.002-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>NEURO FUNCI</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.06.001-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>DISFU PERIFER</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.04.005-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>NEUROMOTRA SEM CP</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.06.003-0</td>
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
                                                Fisioterapia Parte 2
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='30vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '10%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                                <th style={{width: '40%', fontSize:'12px', border: '1px solid black'}}>NOME</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>DISF MUSC ESQUE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.05.001-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ONCO CLINICO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.03.02.002-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PRE/POS CIR ONCO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.03.02.003-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>URO GINECO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.01.002-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PRE POS CIRU UROGI</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.02.01.001-7</td>
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
                                                Consulta Especializada
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>PROFISSIONAL</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CBO</th>
                                                <th style={{width: '10%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                                <th style={{width: '40%', fontSize:'12px', border: '1px solid black'}}>NOME</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>EFE - Enfermagem Emergencia</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>223505</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>FNA - Fonoaudiologia</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>223810</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>NUT - Nutriçao</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>223710</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ODO - Odontologia Clinica</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>223208</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>SPS - Psicologia</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>251520</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TO - Terapia Ocupacional</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>223905</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>SES - Servico Social</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>251605</td>
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
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irProcedimentosClinicoP5} >Proximo</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Procedimentosclinicop4