import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import "./analista.css"

const Procedimentosclinicop2 = () => {

    document.title = "Contas Hospitalares | Checklist dos Procedimentos Clinico";

    let navigate = useNavigate()

    const irProcedimentosClinico = async () => {
        navigate("/procedimentosclinicop1", { replace: true })
    }

    const irProcedimentosClinicoP3 = async () => {
        navigate("/procedimentosclinicop3", { replace: true })
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
                                                Diagnostico por Imagem Parte 2
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CATE PED</td>
                                                <td className="myth1" >02.11.02.002-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >RM CRANIO</td>
                                                <td className="myth1" >02.07.20.006-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >RM CORACAO</td>
                                                <td className="myth1" >02.07.20.001-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >RM TORAX</td>
                                                <td className="myth1" >02.07.20.003-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >RM BILIAR</td>
                                                <td className="myth1" >02.07.03.004-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TC DE CRANIO</td>
                                                <td className="myth1" >02.06.10.007-09</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TC DE TORAX</td>
                                                <td className="myth1" >02.06.20.003-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ECG</td>
                                                <td className="myth1" >02.11.02.003-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
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
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >AORTOGRA ABDO</td>
                                                <td className="myth1" >02.10.01.004-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >AORTOGRA TORAX</td>
                                                <td className="myth1" >02.10.01.005-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CPRE ENDOSCOP</td>
                                                <td className="myth1" >02.09.01.001-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PORTOGRAFIA</td>
                                                <td className="myth1" >02.10.01.016-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PORT TRANSHE</td>
                                                <td className="myth1" >02.10.01.020-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ART CEREBRAL 4V</td>
                                                <td className="myth1" >02.10.01.001-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ART HEMORRA CERE</td>
                                                <td className="myth1" >02.10.01.010-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ARTERIO SEL/VAS</td>
                                                <td className="myth1" >02.10.01.015-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
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
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ARTERIO CAROTI</td>
                                                <td className="myth1" >02.10.01.013-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ARTERIO CERV/TO</td>
                                                <td className="myth1" >02.10.01.006-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ART SEL/CAT</td>
                                                <td className="myth1" >02.09.01.014-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ARTERIO PELV</td>
                                                <td className="myth1" >02.10.01.012-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ART MEBRO</td>
                                                <td className="myth1" >02.10.01.007-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ART AORTA ABDOM</td>
                                                <td className="myth1" >02.10.01.009-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ART ISQUEMI CERE</td>
                                                <td className="myth1" >02.10.01.011-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CPRE TRANSCULT</td>
                                                <td className="myth1" >02.10.02.001-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
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
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >RETOSSIGMOIDE</td>
                                                <td className="myth1" >02.09.01.005-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COLONOSCOPIA</td>
                                                <td className="myth1" >02.09.01.002-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PORTOGRAFIA</td>
                                                <td className="myth1" >02.09.01.016-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TC AB SUP</td>
                                                <td className="myth1" >02.06.30.001-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TC PELV</td>
                                                <td className="myth1" >02.06.30.003-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
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
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ARCADA ZIGOMATICA-MALAR</td>
                                                <td className="myth1" >02.04.01.004-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ARTICULACAO TEMPORO-MANDIBULAR BILATERAL</td>
                                                <td className="myth1" >02.04.01.005-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CAVUM</td>
                                                <td className="myth1" >02.04.01.006-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CRANIO</td>
                                                <td className="myth1" >02.04.01.008-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >OSSOS DA FACE</td>
                                                <td className="myth1" >02.04.01.012-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >SEIOS DA FACE</td>
                                                <td className="myth1" >02.04.01.014-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COLUNA CERVICAL</td>
                                                <td className="myth1" >02.04.02.003-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
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
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irProcedimentosClinicoP3} >Proximo</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Procedimentosclinicop2