import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, FormControl, Input } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import Pagination from '../../components/pagination'
import Table from '../../components/table'

const Resumeclinico = () => {

    document.title = "Contas Hospitalares | Checklist Clinico";

    let navigate = useNavigate()

    const irProcedimentoClinicop6 = async () => {
        navigate("/procedimentosclinicop6", { replace: true })
    }

    const irLista = async () => {
        navigate("/", { replace: true })
    }

    const irDados = async () => {
        navigate("/dadosanalista", { replace: true })
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
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irDados}>Dados</Button>
                    </Box>
                    <Spacer />
                    <Box paddingBottom='10'>
                        <Button w='15vw' backgroundColor='red.900' variant='solid' color='white' _hover={{bg: '#E53E3E'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Sair</Button>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' w='90vw' h='90vh' bg='gray.400'>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' w='80vw' h='88vh' bg='white' borderRadius='md' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' overflow='auto'> 
                        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='end' w='75vw' h='6vh' paddingBottom='0.5vh'>
                            <Text color='blue.900'>Informações</Text>
                            <Text color='blue.900'>CLINICO</Text>
                        </Box>
                        <Divider w='75vw' border='2px' borderColor='blue.900' borderRadius='md' />
                        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                            <Box display='flex' flexDirection='row' w='75vw' paddingBottom='2' paddingTop='2' >
                                <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Nome do Paciente:</Text>
                                <Text color='blue.900' fontSize='md' paddingRight='3'>Caio Guilherme de Lira dos Santos</Text>
                                <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Codigo do Prontuario:</Text>
                                <Text color='blue.900' fontSize='md' paddingRight='3'>00000-0</Text>
                                <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Tipo de Prontuario:</Text>
                                <Text color='blue.900' fontSize='md' >Clinico</Text>
                            </Box>
                            <Box display='flex' flexDirection='row' w='75vw' paddingBottom='2'>
                                <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Data Nascimento:</Text>
                                <Text color='blue.900' fontSize='md' paddingRight='3'>06/04/1994</Text>
                                <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Data Admissao:</Text>
                                <Text color='blue.900' fontSize='md' paddingRight='3'>20/04/2019</Text>
                                <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Data Alta:</Text>
                                <Text color='blue.900' fontSize='md' paddingRight='3'>10/05/2019</Text>
                                <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Tipo de Alta:</Text>
                                <Text color='blue.900' fontSize='md' >01</Text>
                            </Box>
                            <Box display='flex' flexDirection='row' w='75vw' paddingBottom='2'>
                                <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Procedimento Regulado:</Text>
                                <Text color='blue.900' fontSize='md' paddingRight='3'>Nome do Procedimento</Text>
                                <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Mudança de Procedimento:</Text>
                                <Text color='blue.900' fontSize='md' >Nome de Procedimento</Text>
                            </Box>
                            <Box display='flex' flexDirection='column' w='75vw' h='45vh' justifyContent='center' alignItems='center' overflow='auto'>
                                <Table />
                            </Box>
                        </Box>
                        <Spacer />
                        <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center' w='75vw' paddingBottom='2vh'>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' onClick={irProcedimentoClinicop6} >Voltar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' marginRight='2' >Salvar</Button>
                            <Button w='10vw' backgroundColor='green.900' variant='solid' color='white' _hover={{bg: '#38B2AC'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irLista} >Enviar</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Resumeclinico