import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import "./analista.css"

const Procedimentosclinicop3 = () => {

    document.title = "Contas Hospitalares | Checklist dos Procedimentos Clinico";

    let navigate = useNavigate()

    const irProcedimentosClinico = async () => {
        navigate("/procedimentosclinicop2", { replace: true })
    }

    const irProcedimentosClinicoP4 = async () => {
        navigate("/procedimentosclinicop4", { replace: true })
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
                                                Radiografia Parte 2
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COLUNA LOMBO-SACRA</td>
                                                <td className="myth1" >02.04.02.006-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COLUNA TORACIA</td>
                                                <td className="myth1" >02.04.02.009-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COLUNA TORACO-LOMBAR</td>
                                                <td className="myth1" >02.04.02.010-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >REGIAO SACRO-COCCIGEA</td>
                                                <td className="myth1" >02.04.02.012-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PANORAMICA DE COLUNA TOTAL</td>
                                                <td className="myth1" >02.04.02.013-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COSTELAS</td>
                                                <td className="myth1" >02.04.03.007-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TORAX (APICO-LORDOTICA)</td>
                                                <td className="myth1" >02.04.03.012-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TORAX (PA+INSP+EXP+LATERAL)</td>
                                                <td className="myth1" >02.04.03.013-7</td>
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
                                                Radiografia Parte 3
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TORAX (PA+LATERAL+OBLIQUA)</td>
                                                <td className="myth1" >02.04.03.014-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TORAX (PA+PERFIL)</td>
                                                <td className="myth1" >02.04.03.015-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CLAVICULA</td>
                                                <td className="myth1" >02.04.04.006-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COTOVELO</td>
                                                <td className="myth1" >02.04.04.007-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >DEDOS DA MAO</td>
                                                <td className="myth1" >02.04.04.008-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >MAO</td>
                                                <td className="myth1" >02.04.04.009-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >MAO E PUNHO</td>
                                                <td className="myth1" >02.04.04.010-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ESCAPULA/OMBRO</td>
                                                <td className="myth1" >02.04.04.011-6</td>
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
                                                Radiografia Parte 4
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PUNHO</td>
                                                <td className="myth1" >02.04.04.012-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ABDOME SIMPLES</td>
                                                <td className="myth1" >02.04.05.013-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ABDOME AGUDO</td>
                                                <td className="myth1" >02.04.05.012-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ESCANOMETRIA</td>
                                                <td className="myth1" >02.04.06.003-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ARTICULACAO COXO-FEMORAL</td>
                                                <td className="myth1" >02.04.06.006-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ARTICULACAO SACRO-ILIACA</td>
                                                <td className="myth1" >02.04.06.007-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ARTICULACAO TIBIO-TARSICA</td>
                                                <td className="myth1" >02.04.06.008-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >BACIA</td>
                                                <td className="myth1" >02.04.06.009-5</td>
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
                                                Radiografia Parte 5
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='45vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CALCANEO</td>
                                                <td className="myth1" >02.04.06.010-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COXA</td>
                                                <td className="myth1" >02.04.06.011-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >JOELHO</td>
                                                <td className="myth1" >02.04.06.012-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TORAX (PA)</td>
                                                <td className="myth1" >02.04.03.017-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ANTEBRACO</td>
                                                <td className="myth1" >02.04.04.001-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >BRACO</td>
                                                <td className="myth1" >02.04.04.005-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >JOELHO/PATELA (AP+LAT+AXIAL)</td>
                                                <td className="myth1" >02.04.06.013-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PE/DEDOS DO PE</td>
                                                <td className="myth1" >02.04.06.015-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PERNA</td>
                                                <td className="myth1" >02.04.06.016-8</td>
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
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irProcedimentosClinicoP4} >Proximo</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Procedimentosclinicop3