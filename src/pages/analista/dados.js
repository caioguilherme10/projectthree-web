import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, InputGroup, Input, InputRightElement, Image } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import UploadButton from "../../components/uploadButton"

const Dados = () => {

    document.title = "Contas Hospitalares | Dados"

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [show2, setShow2] = React.useState(false)
    const handleClick2 = () => setShow2(!show2)

    let navigate = useNavigate()
 
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
                        <Button w='15vw' backgroundColor='white' variant='solid' color='blue.900' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Dados</Button>
                    </Box>
                    <Spacer />
                    <Box paddingBottom='10'>
                        <Button w='15vw' backgroundColor='red.900' variant='solid' color='white' _hover={{bg: '#E53E3E'}} boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>Sair</Button>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' w='80vw' bg='gray.400'>
                    <Box display='flex' flexDirection='column' alignItems='center' w='70vw' h='80vh' bg='white' borderRadius='md' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' > 
                        <Box display='flex' flexDirection='row' w='60vw' h='6vh' marginTop='2vh'>
                            <Text color='blue.900' as='b'>Dados</Text>
                        </Box>
                        <Divider w='60vw' border='2px' borderColor='blue.900' borderRadius='md' />
                        <Box display='flex' flexDirection='row' w='60vw' marginTop='1vh'>
                            <Box display='flex' flexDirection='column' justifyContent='flex-start'>
                                <Box>
                                    <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Nome:</Text>
                                    <Text color='blue.900' fontSize='md' paddingRight='3'>Caio Guilherme de Lira dos Santos</Text>
                                </Box>
                                <Box>
                                    <Text color='blue.900' fontSize='md' as='b' paddingRight='1'>Email:</Text>
                                    <Text color='blue.900' fontSize='md' paddingRight='3'>caioguilhermeuna@gmail.com</Text>
                                </Box>
                            </Box>
                            <Box display='flex' flexDirection='row' margin='5'>
                                <Box>
                                    <Image
                                        borderRadius='full'
                                        boxSize='150px'
                                        src='https://bit.ly/dan-abramov'
                                        alt='Caio Guilherme'
                                    />
                                </Box>
                                <Box display='flex' flexDirection='column' justifyContent='space-around' margin='5'>
                                    <UploadButton />
                                    <Button w='10vw' backgroundColor='green.800' variant='solid' color='white' _hover={{bg: '#38B2AC'}}>
                                        Salvar
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box display='flex' flexDirection='row' justifyContent='flex-start' w='60vw' marginTop='1vh'>
                            <Divider w='40vw' border='1px' borderColor='blue.900' borderRadius='md' />
                        </Box>
                        <Box display='flex' flexDirection='column' justifyContent='flex-start' w='60vw' marginTop='1vh'>
                            <InputGroup size='md' w='30vw'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Nova Senha'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick} backgroundColor='green.800' variant='solid' color='white' _hover={{bg: '#38B2AC'}}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <InputGroup size='md' w='30vw' marginTop='1vh'>
                                <Input
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
                            <Button w='10vw' backgroundColor='green.800' variant='solid' color='white' _hover={{bg: '#38B2AC'}}>
                                Salvar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Dados