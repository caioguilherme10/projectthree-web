import React from "react"
import { Flex, Box, Spacer, Text, Divider, Button, Avatar, Heading, InputGroup, Input, InputRightElement, Select } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { gql, useMutation } from '@apollo/client'
import { ThemeProvider, createTheme, makeStyles } from '@mui/material/styles';
import Button1 from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const theme = createTheme();

const SET_USER = gql`
    mutation registerUser($usuario: UsuarioInput!){
	    registerUser(input:$usuario) {
            id
  	        nome
            email
  	        senha
            foto
            status
            tipo
            createdAt
            updatedAt
	    }
    }
`;

/*const SET_USER = gql`
    mutation createUsuario($input: UsuarioInput!){
	    createUsuario(input:$input) {
            id
  	        nome
            email
  	        senha
            foto
            status
            tipo
            createdAt
            updatedAt
	    }
    }
`;*/

/*const SET_ARQUIVO = gql`
    mutation readTextFile($file: File!){
        readTextFile(file: $file)
    }
`*/

let user = {
    nome: '',
    email: '',
    senha: '',
    status: '',
    tipo: '',
}

const Cadastro = () => {

    document.title = "Contas Hospitalares | Dados"

    let navigate = useNavigate()

    const [setUser, { data, loading, error }] = useMutation(SET_USER);
    //const [setUser, { data, loading, error }] = useMutation(SET_ARQUIVO);

    console.log(data);
    console.log(loading);
    console.log(error);

    const [usuario, setUsuario] = React.useState(user)
    const [email, setEmail] = React.useState('')
    const [nome, setNome] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [aprosenha, setAproSenha] = React.useState('')
    const [status, setStatus] = React.useState('')
    const [tipo, setTipo] = React.useState('')
    const [image, setImage] = React.useState('')

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [show2, setShow2] = React.useState(false)
    const handleClick2 = () => setShow2(!show2)

    const handleChangeSelectStatus = (event) => {
        console.log(event.target.value);
        if(event.target.value ==='ativo'){
            setStatus('ATIVO');
        } else if(event.target.value ==='inativo'){
            setStatus('INATIVO');
        } else if(event.target.value ==='bloqueado'){
            setStatus('BLOQUEADO')
        }
    };

    const handleChangeSelectTipo = (event) => {
        console.log(event.target.value);
        if(event.target.value ==='admin'){
            setTipo('ADMINISTRADOR');
        } else if(event.target.value ==='analista'){
            setTipo('ANALISTA');
        } else if(event.target.value ==='auditor'){
            setTipo('AUDITOR');
        } else if(event.target.value ==='digitador'){
            setTipo('DIGITADOR');
        }
    };

    const onChangeImage = ({target: {
        validity,
        files: [file],
      },}) => {
        if (validity.valid) setImage(file)
    }

    const handleChangeSalvar = async () => {
        console.log('entrou');
        const formData = new FormData();
        //formData.append("nome", "caio5");
        //formData.append("email", "caio5@gmail")
        //formData.append("senha", "caio5")
        //formData.append("status", "ATIVO")
        //formData.append("tipo", "DIGITADOR")
        formData.append("file", image);
        const aaa = {
            usuario: {
            //input: {
                nome: nome,
                email: email,
                senha: senha,
                status: status,
                tipo: tipo
            }
        }
        const bbb = {
            usuario: formData
        }
        console.log(aaa)
        console.log(bbb)
        console.log(formData)
        //setUser({ variables: { nome: nome, email: email, senha: senha, status: status, tipo: tipo } });
        //setUser({ variables: { file: image } })
        setUser({ variables: aaa })
        /*if(data != undefined){
            const response = await axios.post(`http://localhost:4001/avatar/`+ data.registerUser.id, {
                formData
            },{
                headers: {"Access-Control-Allow-Origin": "*"}
            })

            console.log(response)
        }*/
    }

    React.useEffect(()=> {
        console.log("effect")
        async function fetchData() {
            if(data != undefined){
                const formData2 = new FormData()
                formData2.append("file", image)
                try {
                    const response = await axios.post(`http://localhost:4001/avatar/`+ data.registerUser.id, formData2 ,{
                        headers: {"Access-Control-Allow-Origin": "*"}
                    })
                    console.log(response);
                    navigate("/cadastroadmin", { replace: true })
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchData()
    },[data])

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
                            <Text color='blue.900' as='b'>Cadastro</Text>
                        </Box>
                        <Divider w='60vw' border='2px' borderColor='blue.900' borderRadius='md' />
                        <Box display='flex' flexDirection='row' w='60vw' marginTop='1vh'>
                            <Box display='flex' flexDirection='column' justifyContent='flex-start'>
                                <Box marginTop='1vh'>
                                    <Input
                                        borderColor='Black'
                                        pr='4.5rem' 
                                        placeholder='Email'
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </Box>
                                <Box marginTop='1vh'>
                                    <Input
                                        borderColor='Black'
                                        pr='4.5rem' 
                                        placeholder='Nome'
                                        value={nome}
                                        onChange={(event) => setNome(event.target.value)}
                                    />
                                </Box>
                                <Box marginTop='1vh'>
                                    <Select
                                        borderColor='Black'
                                        placeholder='Status'
                                        onChange={handleChangeSelectStatus}
                                    >
                                        <option value='ativo'>Ativo</option>
                                        <option value='inativo'>inativo</option>
                                        <option value='bloqueado'>Bloqueado</option>
                                    </Select>
                                </Box>
                                <Box marginTop='1vh'>
                                    <Select
                                        borderColor='Black'
                                        placeholder='Tipo'
                                        onChange={handleChangeSelectTipo}
                                    >
                                        <option value='admin'>Administrador</option>
                                        <option value='analista'>Analista</option>
                                        <option value='auditor'>Auditor</option>
                                        <option value='digitador'>Digitador</option>
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
                                    value={senha}
                                    onChange={(event) => setSenha(event.target.value)}
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
                                    value={aprosenha}
                                    onChange={(event) => setAproSenha(event.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick2} backgroundColor='green.800' variant='solid' color='white' _hover={{bg: '#38B2AC'}}>
                                        {show2 ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <ThemeProvider theme={theme}>
                                <Stack spacing={2}>
                                    <input
                                        accept="image/*"
                                        style={{display: 'none'}}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        //onChange={(event) => setImage(event.target.files[0])}
                                        onChange={onChangeImage}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button1 variant="contained" color="primary" component="span">
                                            Upload
                                        </Button1>
                                    </label>
                                </Stack>
                            </ThemeProvider>
                        </Box>
                        <Box display='flex' flexDirection='row' justifyContent='center' w='60vw' marginTop='3vh'>
                            <Button w='10vw' backgroundColor='green.800' variant='solid' color='white' _hover={{bg: '#38B2AC'}} onClick={handleChangeSalvar}>
                                Salvar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Cadastro