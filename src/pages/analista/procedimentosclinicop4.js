import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Input, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import "./analista.css"

const Procedimentosclinicop4 = () => {

    document.title = "Contas Hospitalares | Checklist dos Procedimentos Clinico";

    let navigate = useNavigate()

    const irProcedimentosClinico = async () => {
        navigate("/procedimentosclinicop3", { replace: true })
    }

    const irProcedimentosClinicoP5 = async () => {
        navigate("/procedimentosclinicop5", { replace: true })
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
                                                Hemoderivados
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
                                                <td className="myth1" >CON PLAQUET</td>
                                                <td className="myth1" >03.06.02.007-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CRIOPRECIPITATO</td>
                                                <td className="myth1" >03.06.02.008-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PLASMA</td>
                                                <td className="myth1" >03.06.02.010-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >COM HEMACIA</td>
                                                <td className="myth1" >03.06.02.006-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PLAQUETAS APER</td>
                                                <td className="myth1" >03.06.02.009-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >MOD IF I</td>
                                                <td className="myth1" >02.12.01.002-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >MOD IF II</td>
                                                <td className="myth1" >02.12.01.003-4</td>
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
                                                Medicações Especias
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='35vh' w='75vw' padding='0.5'>
                                        <table>
                                            <tr style={{border: '1px solid black'}}>
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth2" >COMP 1</th>
                                                <th className="myth2" >COMP 2</th>
                                                <th className="myth3" >COMP 3</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >AGRASTAT</td>
                                                <td className="myth1" >06.03.05.002-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ALBUMINA</td>
                                                <td className="myth1" >06.03.07.001-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >BERIPLEX</td>
                                                <td className="myth1" >06.03.07.002-7</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >STREPLASE</td>
                                                <td className="myth1" >06.03.05.003-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >REOPRO</td>
                                                <td className="myth1" >06.03.05.001-8</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ISCOVER 75mg</td>
                                                <td className="myth1" >06.03.05.010-7</td>
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
                                                Fisioterapia Parte 1
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth5" >QTD</th>
                                                <th className="myth6" >NOME</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >CLI/CARDIOVASC</td>
                                                <td className="myth1" >03.02.04.003-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PRE/POS CIR CARDIO</td>
                                                <td className="myth1" >03.02.05.003-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >RESP CP SIST</td>
                                                <td className="myth1" >03.02.04.001-3</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >RESP SEM CP SIST</td>
                                                <td className="myth1" >03.02.04.002-1</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >NEUROMOTRA CP SIS</td>
                                                <td className="myth1" >03.02.06.002-2</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >NEURO FUNCI</td>
                                                <td className="myth1" >03.02.06.001-4</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >DISFU PERIFER</td>
                                                <td className="myth1" >03.02.04.005-6</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >NEUROMOTRA SEM CP</td>
                                                <td className="myth1" >03.02.06.003-0</td>
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
                                                Fisioterapia Parte 2
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='30vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th className="myth4" >PROCEDIMENTOS</th>
                                                <th className="myth2" >CODIGO</th>
                                                <th className="myth5" >QTD</th>
                                                <th className="myth6" >NOME</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >DISF MUSC ESQUE</td>
                                                <td className="myth1" >03.02.05.001-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ONCO CLINICO</td>
                                                <td className="myth1" >03.03.02.002-0</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PRE/POS CIR ONCO</td>
                                                <td className="myth1" >03.03.02.003-9</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >URO GINECO</td>
                                                <td className="myth1" >03.02.01.002-5</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >PRE POS CIRU UROGI</td>
                                                <td className="myth1" >03.02.01.001-7</td>
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
                                                Consulta Especializada
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel h='40vh' w='75vw' padding='0.5'>
                                        <table style={{border: '1px solid black'}}>
                                            <tr style={{border: '1px solid black'}}>
                                                <th className="myth4" >PROFISSIONAL</th>
                                                <th className="myth2" >CBO</th>
                                                <th className="myth5" >QTD</th>
                                                <th className="myth6" >NOME</th>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >EFE - Enfermagem Emergencia</td>
                                                <td className="myth1" >223505</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >FNA - Fonoaudiologia</td>
                                                <td className="myth1" >223810</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >NUT - Nutriçao</td>
                                                <td className="myth1" >223710</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >ODO - Odontologia Clinica</td>
                                                <td className="myth1" >223208</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >SPS - Psicologia</td>
                                                <td className="myth1" >251520</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >TO - Terapia Ocupacional</td>
                                                <td className="myth1" >223905</td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                                <td className="myth1" ><Input size='xs'/></td>
                                            </tr>
                                            <tr style={{border: '1px solid black'}}>
                                                <td className="myth1" >SES - Servico Social</td>
                                                <td className="myth1" >251605</td>
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
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irProcedimentosClinicoP5} >Proximo</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Procedimentosclinicop4