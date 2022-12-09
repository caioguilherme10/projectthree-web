import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, FormControl, Input } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Checklistclinico = () => {

    document.title = "Contas Hospitalares | Checklist Clinico";

    let navigate = useNavigate()

    const irProcedimentoClinico = async () => {
        navigate("/procedimentosclinicop1", { replace: true })
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
                <Box display='flex' justifyContent='center' alignItems='center' w='80vw' bg='gray.400'>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' w='70vw' h='80vh' bg='white' borderRadius='md' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' > 
                        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='end' w='60vw' h='6vh' paddingBottom='0.5vh'>
                            <Text color='blue.900' as='b'>Informações</Text>
                            <Text color='blue.900' as='b'>CLINICO</Text>
                        </Box>
                        <Divider w='60vw' border='2px' borderColor='blue.900' borderRadius='md' />
                        <Box display='flex' flexDirection='column'>
                            <FormControl>
                                <Box display='flex' flexDirection='row' w='60vw' paddingBottom='2' paddingTop='2' >
                                    <Input borderColor='Black' placeholder='Prontuario' marginRight='2' />
                                    <Button w='10vw' backgroundColor='blue.900' variant='solid' color='white' _hover={{bg: '#4299E1'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Buscar</Button>
                                </Box>
                                <Box display='flex' flexDirection='row' w='60vw' paddingBottom='2'>
                                    <Input borderColor='Black' placeholder='Paciente' marginRight='2' />
                                    <Input borderColor='Black' placeholder='Tipo Alta' />
                                </Box>
                                <Box display='flex' flexDirection='row' w='60vw' paddingBottom='2'>
                                    <Input borderColor='Black' placeholder='Data Nascimento' marginRight='2' />
                                    <Input borderColor='Black' placeholder='Admição' marginRight='2' />
                                    <Input borderColor='Black' placeholder='Alta' />
                                </Box>
                                <Box display='flex' flexDirection='row' w='60vw' paddingBottom='2'>
                                    <Input borderColor='Black' placeholder='Procedimento Regulado' marginRight='2' />
                                    <Input borderColor='Black' placeholder='CID 1' />
                                </Box>
                                <Box display='flex' flexDirection='row' w='60vw' paddingBottom='2'>
                                    <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Mudança</Button>
                                </Box>
                                <Box display='flex' flexDirection='row' w='60vw' paddingBottom='2'>
                                    <Input borderColor='Black' placeholder='Mudança de Procedimento' marginRight='2' />
                                    <Input borderColor='Black' placeholder='CID 2' />
                                </Box>
                            </FormControl>
                        </Box>
                        <Spacer />
                        <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center' w='60vw' paddingBottom='2vh'>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' onClick={salvar}>Salvar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irProcedimentoClinico} >Proximo</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Checklistclinico