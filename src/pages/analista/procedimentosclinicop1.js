import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Procedimentosclinico = () => {

    document.title = "Contas Hospitalares | Checklist dos Procedimentos Clinico";

    let navigate = useNavigate()

    const irClinico = async () => {
        navigate("/checkclinico", { replace: true })
    }

    const irProcedimentosClinico = async () => {
        navigate("/procedimentosclinicop2", { replace: true })
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
                                        <AccordionButton backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)' marginBottom='1' marginTop='1'>
                                            <Box flex='1' textAlign='left' fontSize='xs'>
                                                Procedimentos Gerais
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='27vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}} >PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CONSULTAS MEDICAS</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.01.017-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>DIA ACOM MENOR</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>08.02.01.002-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PERM.MAIOR</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>08.02.01.019-9</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>DIA ACOM IDOSO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>08.02.01.004-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>DIA ACOMP MAIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>08.02.01.001-6</td>
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
                                                Procedimentos Tecnicos Parte 1
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='50vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th style={{width: '25%', fontSize:'12px', border: '1px solid black'}} >PROCEDIMENTOS</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>CODIGO</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 1</th>
                                                <th style={{width: '20%', fontSize:'12px', border: '1px solid black'}}>COMP 2</th>
                                                <th style={{fontSize:'12px', border: '1px solid black'}}>COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>SONDA VESICAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.005-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>SONDA VESICAL ALIVIO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.004-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ENEMA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.009-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>IRRIGACAO VESICAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.011-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>OXIGENOTERAPIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.014-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CUIDADO TRAQUEOSTO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.007-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PVC</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.008-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>NRZ</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.010-1</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>LAVAGEM GASTRICA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.012-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CUIDADO C/ESTOMA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>03.01.10.006-3</td>
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
                                                Procedimentos Tecnicos Parte 2
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
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CURATIVO II</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>04.01.01.001-5</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>SEDAÇAO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>04.17.01.006-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ANESTESIA LOCAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>04.17.01.005-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>PARECENTESE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>04.07.04.019-6</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ANASTESIA GERAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>04.17.01.004-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>RETIRADA DRENO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>04.12.03.012-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TRAQUEOSTOMIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>04.12.01.012-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>TORACOCENTESE</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>04.12.05.017-0</td>
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
                                                Diagnostico por Imagem Parte 1
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
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ECOCARDIOGRA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.05.01.003-2</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ECO TRANSESO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.05.01.002-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>ENDOSCOPIA</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.09.01.003-7</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>USG ADB TOTAL</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.05.20.004-06</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>USG AB SUP</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.05.02.003-8</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>USG AP URIN</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.05.02.005-4</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>DOOPLER</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.05.01.004-0</td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                                <td style={{border: '1px solid black'}}><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>CATE ADULTO</td>
                                                <td style={{fontSize:'10px', border: '1px solid black'}}>02.11.02.001-0</td>
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
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' onClick={irClinico} >Voltar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' onClick={salvar}>Salvar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irProcedimentosClinico} >Proximo</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Procedimentosclinico