import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, InputGroup, Input, InputRightElement, Select } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Resumousuario = () => {

    document.title = "Contas Hospitalares | Usuario"

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [show2, setShow2] = React.useState(false)
    const handleClick2 = () => setShow2(!show2)

    let navigate = useNavigate()

    const irCadastro = async () => {
        navigate("/cadastroadmin", { replace: true })
    }

    const irDados = async () => {
        navigate("/dadosadmin", { replace: true })
    }

    const irList = async () => {
        navigate("/listusuarios", { replace: true })
    }

    const irSair = async () => {
        navigate("/", { replace: true })
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
                            <Text color='white'>Admin</Text>
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
                        <Box display='flex' flexDirection='row' w='60vw' h='6vh' marginTop='2vh'>
                            <Text color='blue.900' as='b'>Editar</Text>
                        </Box>
                        <Divider w='60vw' border='2px' borderColor='blue.900' borderRadius='md' />
                        <Box display='flex' flexDirection='row' w='60vw' marginTop='1vh'>
                            <Box display='flex' flexDirection='column' justifyContent='flex-start'>
                                <Box marginTop='1vh'>
                                    <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Email:</Text>
                                    <Text color='blue.900' fontSize='md' paddingRight='3'>caioguilhermeuna@gmail.com</Text>
                                </Box>
                                <Box marginTop='1vh'>
                                    <Input
                                        borderColor='Black'
                                        pr='4.5rem' 
                                        placeholder='Nome' 
                                    />
                                </Box>
                                <Box marginTop='1vh'>
                                    <Select
                                        borderColor='Black'
                                        placeholder='Select option'
                                    >
                                        <option value='option1'>Admin</option>
                                        <option value='option2'>Analista</option>
                                        <option value='option3'>Auditor</option>
                                        <option value='option3'>Digitador</option>
                                    </Select>
                                </Box>
                            </Box>
                        </Box>
                        <Box display='flex' flexDirection='column' justifyContent='flex-start' w='60vw' marginTop='1vh'>
                            <InputGroup size='md' w='30vw'>
                                <Input
                                    borderColor='Black'
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Senha'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick} backgroundColor='green.800' variant='solid' color='white' _hover={{bg: '#38B2AC'}}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <InputGroup size='md' w='30vw' marginTop='1vh'>
                                <Input
                                    borderColor='Black'
                                    pr='4.5rem'
                                    type={show2 ? 'text' : 'password'}
                                    placeholder='Comfirmar'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick2} backgroundColor='green.800' variant='solid' color='white' _hover={{bg: '#38B2AC'}}>
                                        {show2 ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Box display='flex' flexDirection='row' justifyContent='center' w='60vw' marginTop='3vh'>
                            <Button w='10vw' marginRight='1vh' backgroundColor='red.800' variant='solid' color='white' _hover={{bg: '#E53E3E'}}>
                                Deletar
                            </Button>
                            <Button w='10vw' backgroundColor='green.800' variant='solid' color='white' _hover={{bg: '#38B2AC'}}>
                                Atualizar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Resumousuario