import React from "react"
import { Flex, Box, Button, InputGroup, Heading, Input, InputRightElement } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Login = () => {

    document.title = "Contas Hospitalares | Login ";

    let navigate = useNavigate();

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const handleLogin = () => {
        navigate("/checklist", { replace: true })
    }

    return (
        <Flex w='100vw' h='100vh' direction='column'>
            <Box display='flex' alignItems='center' justifyContent='flex-start' w='100vw' h='10vh' bg='blue.900' paddingLeft='4vw'>
                <Heading color='white' as='h4' size='md'>Contas Hospitalares</Heading>
            </Box>
            <Box display='flex' w='100vw' h='90vh' flexDirection='row' justifyContent='center' alignItems='center' bgGradient='linear(to-b, blue.600, blue.900)'>
                <Box display='flex' flexDirection='column' w='40vw' h='60vh' bg='white'>
                    <Box w='40vw' h='15vh' display='flex' justifyContent='center' alignItems='center'>
                        <Heading color='#38B2AC' as='h4' size='lg'>LOGIN</Heading>
                    </Box>
                    <Box w='40vw' h='25vh' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Box paddingBottom='10'>
                            <Input placeholder='E-mail' pr='4.5rem'/>
                        </Box>
                        <Box>
                            <InputGroup size='md'>
                                <Input
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
                        </Box>
                    </Box>
                    <Box w='30vw' h='15vh' paddingTop='5' display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button w='10vw' backgroundColor='green.800' variant='solid' color='white' _hover={{bg: '#38B2AC'}} onClick={handleLogin}>
                            Login
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Login