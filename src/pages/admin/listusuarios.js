import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, Select } from '@chakra-ui/react'
import Pagination from '../../components/pagination'
import List from '../../components/listusuario'
import Busca from '../../components/busca'
import { useNavigate } from "react-router-dom"
import { gql, useQuery } from '@apollo/client'

const GET_USERS = gql`
    query Users {
	    users {
            usuario {
                id
                email
                nome
                senha
                status
                tipo
                createdAt
                updatedAt
            }
        }
    }
`;

const Listusuarios = () => {

    document.title = "Contas Hospitalares | Lista de Usuarios"

    const { loading, error, data } = useQuery(GET_USERS);

    console.log(data);
    console.log(loading);
    console.log(error);

    let navigate = useNavigate()

    const irList = async () => {
        navigate("/listusuarios", { replace: true })
    }

    const irCadastro = async () => {
        navigate("/cadastroadmin", { replace: true })
    }

    const irDados = async () => {
        navigate("/dadosadmin", { replace: true })
    }

    const irSair = async () => {
        navigate("/", { replace: true })
    }

    let array = [
        {id: 1, email:'caio@gmail.com', nome:'caio'},
        {id: 2, email:'jose@gmail.com', nome:'jose'},
        {id: 3, email:'carlos@gmail.com', nome:'carlos'},
        {id: 4, email:'maria@gmail.com', nome:'maria'},
        {id: 5, email:'jose@gmail.com', nome:'jose'},
        {id: 6, email:'carlos@gmail.com', nome:'carlos'},
        {id: 7, email:'maria@gmail.com', nome:'maria'},
        //{id: 8, prontuario:'3244', paciente:'jose', data:'22/06/2022'},
        //{id: 9, prontuario:'5244', paciente:'carlos', data:'22/06/2022'},
        //{id: 10, prontuario:'4014', paciente:'maria', data:'22/06/2022'},
    ]
 
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
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irCadastro}>Cadastro</Button>
                    </Box>
                    <Box paddingBottom='2'>
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irDados}>Dados</Button>
                    </Box>
                    <Box>
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irList}>Usuarios</Button>
                    </Box>
                    <Spacer />
                    <Box paddingBottom='10'>
                        <Button w='15vw' backgroundColor='red.900' variant='solid' color='white' _hover={{bg: '#E53E3E'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' onClick={irSair}>Sair</Button>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' w='80vw' bg='gray.400'>
                    <Box display='flex' flexDirection='column' alignItems='center' w='70vw' h='80vh' bg='white' borderRadius='md' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' > 
                        <Box display='flex' flexDirection='row' w='60vw' h='5vh' marginTop='2vh'>
                            <Text color='blue.900' as='b'>Lista de Usuarios</Text>
                        </Box>
                        <Divider w='60vw' border='2px' borderColor='blue.900' borderRadius='md' />
                        <Box display='flex' flexDirection='row' justifyContent='space-between' w='60vw' marginTop='3'>
                            <Busca />
                            <Select borderColor='Black' w='10vw'>
                                <option value='option1'>Admin</option>
                                <option value='option2'>Analista</option>
                                <option value='option2'>Auditor</option>
                                <option value='option2'>Digitador</option>
                            </Select>
                        </Box>
                        <Box display='flex' flexDirection='row' justifyContent='center' w='60vw' marginBottom='3' marginTop='3'>
                            <List objetarray={array}/>
                        </Box>
                        <Box display='flex' flexDirection='row' justifyContent='center'>
                            <Pagination />
                        </Box>      
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Listusuarios