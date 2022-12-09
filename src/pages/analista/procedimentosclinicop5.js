import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import "./analista.css"

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
                            <Text color='blue.900' as='b'>Informações - Procedimentos</Text>
                            <Text color='blue.900' as='b'>CLINICO</Text>
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
                                                <th className="myth2" >OPM</th>
                                                <th className="myth7" >CODIGO</th>
                                                <th className="myth5" >COMP</th>
                                                <th className="myth5" >QTD</th>
                                                <th className="myth4" >FORNCEDOR</th>
                                                <th className="myth6" >Nº NF</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >BALAO DESTACAVEL</td>
                                                <td className="myth1" >07.02.01.00.14</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CAT CENTRAL</td>
                                                <td className="myth1" >07.02.04.015-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >BALAO INTRAORTICO</td>
                                                <td className="myth1" >07.02.05.012-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >INTRODUTOR</td>
                                                <td className="myth1" >07.02.04.040-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ELETRODO</td>
                                                <td className="myth1" >07.02.04.026-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CATETER DE PAM</td>
                                                <td className="myth1" >07.02.05.006-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
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
                                                <th className="myth2" >EXAME</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth5" >QTD</th>
                                                <th className="myth2" >EXAME</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth6" >QTD</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ACIDO URICO</td>
                                                <td className="myth1" >02.02.01.012.0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >AG HBS</td>
                                                <td className="myth1" >02.02.03.097-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >AMILASE</td>
                                                <td className="myth1" >02.02.01.018-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >ANTI HBS</td>
                                                <td className="myth1" >02.02.03.063-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ANTI HCV</td>
                                                <td className="myth1" >02.02.03.067-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >ANTI HIV</td>
                                                <td className="myth1" >02.02.03.030-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ANTI HTLV</td>
                                                <td className="myth1" >02.02.03.031-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >ANTIBIOGRAMA</td>
                                                <td className="myth1" >02.02.08.001-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ASLO</td>
                                                <td className="myth1" >02.02.03.047-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >BACILOSCOPIA</td>
                                                <td className="myth1" >02.02.08.004-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >BILIRRUBINA TOTAL E FRAÇOES</td>
                                                <td className="myth1" >02.02.01.020-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >CALCIO</td>
                                                <td className="myth1" >02.02.01.021-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CALCIO IONIZADO</td>
                                                <td className="myth1" >02.02.01.022-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >CLEARENCE DE CREATININA</td>
                                                <td className="myth1" >02.02.05.002-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CLORO</td>
                                                <td className="myth1" >02.02.01.026-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >COLESTEROLHDL</td>
                                                <td className="myth1" >02.02.01.027-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
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
                                                <th className="myth2" >EXAME</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth5" >QTD</th>
                                                <th className="myth2" >EXAME</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth6" >QTD</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >FOSFORO</td>
                                                <td className="myth1" >02.02.01.043.0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >GAMA GT</td>
                                                <td className="myth1" >02.02.01.046-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >GASOMETRIA</td>
                                                <td className="myth1" >02.02.01.073-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >GLICOSE</td>
                                                <td className="myth1" >02.02.01.047-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >GRUPO SANGUINEO</td>
                                                <td className="myth1" >02.02.12.002-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >HEMOCULTURA</td>
                                                <td className="myth1" >02.02.08.015-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >HEMOGRAMA COMPLETO</td>
                                                <td className="myth1" >02.02.02.038-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >LACTATO</td>
                                                <td className="myth1" >02.02.01.053-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >LACTATO DESIDROGENASE IDH</td>
                                                <td className="myth1" >02.02.01.036-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >LATEX</td>
                                                <td className="myth1" >02.02.09.030-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >MAGNESIO</td>
                                                <td className="myth1" >02.02.01.056-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >PARASITOLOGICO DE FEZES</td>
                                                <td className="myth1" >02.02.04.012-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PROTEINA C REATIVA PCR</td>
                                                <td className="myth1" >02.02.03.020-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >PLAQUETAS</td>
                                                <td className="myth1" >02.02.02.002-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >POTASSIO</td>
                                                <td className="myth1" >02.02.01.060-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >PROTEINAS TOTAIS ALBUMINA</td>
                                                <td className="myth1" >02.02.01.061-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
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
                                                <th className="myth2" >EXAME</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth5" >QTD</th>
                                                <th className="myth2" >EXAME</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth6" >QTD</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COLESTEROL LDL</td>
                                                <td className="myth1" >02.02.01.028.7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >COLESTEROL TOTAL</td>
                                                <td className="myth1" >02.02.01.029-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COOMBS DIRETO</td>
                                                <td className="myth1" >02.02.02.054-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >COOMBS INDIRETO</td>
                                                <td className="myth1" >02.02.12.009-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CREATINOFOSOFOKINASE (CPK)</td>
                                                <td className="myth1" >02.02.01.032-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >CREATINOFOSOFOKINASE FRAÇAO MB</td>
                                                <td className="myth1" >02.02.01.033-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CAPAC. TOTAL DE LIGACAO DE FERRO</td>
                                                <td className="myth1" >02.02.01.002-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >CHAGAS</td>
                                                <td className="myth1" >02.02.03.104-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CITOLOGIA ESPECIFICA CELULASLIQUOR</td>
                                                <td className="myth1" >02.02.09.006-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >CITOLOGIA GLOBAL CELULASLIQUOR</td>
                                                <td className="myth1" >02.02.09.006-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CREATININA</td>
                                                <td className="myth1" >02.02.01.031-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >CULTURA GERAL(URINA,FEZES,SECRECAO)</td>
                                                <td className="myth1" >02.02.08.008-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ERITROGRAMA</td>
                                                <td className="myth1" >02.02.02.036-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >FATOR REUMATOIDE</td>
                                                <td className="myth1" >02.02.03.007-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >FATOR RH</td>
                                                <td className="myth1" >02.02.12.008-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >FERRITINA</td>
                                                <td className="myth1" >02.02.01.038-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
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
                                                <th className="myth2" >EXAME</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth5" >QTD</th>
                                                <th className="myth2" >EXAME</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth6" >QTD</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >FERRO</td>
                                                <td className="myth1" >02.02.01.039.2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >FIBRINOGENIO</td>
                                                <td className="myth1" >02.02.02.029-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >FOSFATASE ACIDA PROSTATICA</td>
                                                <td className="myth1" >02.02.01.044-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >FOSFATASE ALCALINA</td>
                                                <td className="myth1" >02.02.01.042-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PROTEINAS TOTAIS E FRAÇOES</td>
                                                <td className="myth1" >02.02.01.062-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >PROTEINURIA DE 24 HS</td>
                                                <td className="myth1" >02.02.05.011-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >REAÇAO DE MANTOUX (PPD)</td>
                                                <td className="myth1" >02.02.03.024-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >RETTICULOCITOS</td>
                                                <td className="myth1" >02.02.02.003-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >SODIO</td>
                                                <td className="myth1" >02.02.01.063-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >SUMARIO DE URINA</td>
                                                <td className="myth1" >02.02.05.001-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >T3</td>
                                                <td className="myth1" >02.02.06.039-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >T4</td>
                                                <td className="myth1" >02.02.06.037-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TGO</td>
                                                <td className="myth1" >02.02.01.065-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >TGP</td>
                                                <td className="myth1" >02.02.01.064-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TEMPO DE PROTOMBINA - TP</td>
                                                <td className="myth1" >02.02.02.014-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" >TEMPO TROMBOPLASTINA ATIVADA PARCIAL</td>
                                                <td className="myth1" >02.02.02.013-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
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