import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Procedimentosclinicop5 = () => {

    document.title = "Contas Hospitalares | Checklist dos Procedimentos Clinico";

    let navigate = useNavigate()

    const irProcedimentosClinico = async () => {
        navigate("/procedimentosclinicop4", { replace: true })
    }

    const irProcedimentosClinicoP6 = async () => {
        navigate("/procedimentosclinicop6", { replace: true })
    }

    const irNovoChecklist = async () => {
        navigate("/checklist", { replace: true })
    }

    const irAbertos = async () => {
        navigate("/listchecklist", { replace: true })
    }

    const irCorrecoes = async () => {
        navigate("/listcorrecoes", { replace: true })
    }

    const irDados = async () => {
        navigate("/dadosanalista", { replace: true })
    }

    const irSair = async () => {
        navigate("/", { replace: true })
    }

    const salvar = async () => {
        navigate("/checklist", { replace: true })
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
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irNovoChecklist}>Novo Checklist</Button>
                    </Box>
                    <Box paddingBottom='2'>
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irAbertos}>Abertos</Button>
                    </Box>
                    <Box paddingBottom='2'>
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irCorrecoes}>Correções</Button>
                    </Box>
                    <Box>
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irDados}>Dados</Button>
                    </Box>
                    <Spacer />
                    <Box paddingBottom='10'>
                        <Button w='15vw' backgroundColor='red.900' variant='solid' color='white' _hover={{bg: '#E53E3E'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irSair}>Sair</Button>
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
                                                Ortese Protese e Material Especial
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='35vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>OPM</th>
                                                <th style={{width: '15%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '10%', fontSize:'12px', border: '1px solid black'}}>COMP</th>
                                                <th style={{width: '10%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}}>FORNCEDOR</th>
                                                <th style={{width: '40%', fontSize:'12px', border: '1px solid black'}}>Nº NF</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>BALAO DESTACAVEL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>07.02.01.00.14</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CAT CENTRAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>07.02.04.015-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>BALAO INTRAORTICO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>07.02.05.012-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>INTRODUTOR</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>07.02.04.040-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ELETRODO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>07.02.04.026-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CATETER DE PAM</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>07.02.05.006-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
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
                                                Exames Laboratorias Parte 1
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>EXAME</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '10%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>EXAME</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '40%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ACIDO URICO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.012.0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>AG HBS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.097-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>AMILASE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.018-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ANTI HBS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.063-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ANTI HCV</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.067-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ANTI HIV</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.030-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ANTI HTLV</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.031-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ANTIBIOGRAMA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.08.001-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ASLO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.047-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>BACILOSCOPIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.08.004-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>BILIRRUBINA TOTAL E FRAÇOES</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.020-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CALCIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.021-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CALCIO IONIZADO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.022-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CLEARENCE DE CREATININA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.05.002-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CLORO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.026-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COLESTEROLHDL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.027-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1'>
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Exames Laboratorias Parte 2
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>EXAME</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '10%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>EXAME</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '40%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>FOSFORO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.043.0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>GAMA GT</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.046-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>GASOMETRIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.073-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>GLICOSE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.047-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>GRUPO SANGUINEO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.12.002-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>HEMOCULTURA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.08.015-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>HEMOGRAMA COMPLETO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.02.038-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>LACTATO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.053-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>LACTATO DESIDROGENASE IDH</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.036-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>LATEX</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.09.030-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>MAGNESIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.056-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PARASITOLOGICO DE FEZES</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.04.012-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PROTEINA C REATIVA PCR</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.020-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PLAQUETAS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.02.002-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>POTASSIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.060-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PROTEINAS TOTAIS ALBUMINA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.061-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1'>
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Exames Laboratorias Parte 3
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                    <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>EXAME</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '10%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>EXAME</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '40%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COLESTEROL LDL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.028.7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COLESTEROL TOTAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.029-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COOMBS DIRETO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.02.054-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>COOMBS INDIRETO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.12.009-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CREATINOFOSOFOKINASE (CPK)</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.032-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CREATINOFOSOFOKINASE FRAÇAO MB</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.033-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CAPAC. TOTAL DE LIGACAO DE FERRO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.002-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CHAGAS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.104-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CITOLOGIA ESPECIFICA CELULASLIQUOR</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.09.006-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CITOLOGIA GLOBAL CELULASLIQUOR</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.09.006-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CREATININA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.031-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CULTURA GERAL(URINA,FEZES,SECRECAO)</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.08.008-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ERITROGRAMA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.02.036-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>FATOR REUMATOIDE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.007-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>FATOR RH</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.12.008-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>FERRITINA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.038-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                        </table>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginBottom='1'>
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Exames Laboratorias Parte 4
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                    <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>EXAME</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '10%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>EXAME</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '40%', fontSize:'12px', border: '1px solid black'}}>QTD</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>FERRO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.039.2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>FIBRINOGENIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.02.029-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>FOSFATASE ACIDA PROSTATICA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.044-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>FOSFATASE ALCALINA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.042-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PROTEINAS TOTAIS E FRAÇOES</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.062-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PROTEINURIA DE 24 HS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.05.011-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>REAÇAO DE MANTOUX (PPD)</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.03.024-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>RETTICULOCITOS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.02.003-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>SODIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.063-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>SUMARIO DE URINA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.05.001-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>T3</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.06.039-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>T4</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.06.037-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TGO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.065-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TGP</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.01.064-3</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TEMPO DE PROTOMBINA - TP</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.02.014-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TEMPO TROMBOPLASTINA ATIVADA PARCIAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.02.02.013-4</td>
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
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' onClick={salvar}>Salvar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irProcedimentosClinicoP6} >Proximo</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Procedimentosclinicop5