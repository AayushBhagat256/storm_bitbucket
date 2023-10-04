import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    CircularProgress,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    ChakraProvider,
    SimpleGrid,
    useToast,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import './Contact.css'
import { BsGithub, BsDiscord, BsPerson, BsFillBuildingsFill, BsFillPersonBadgeFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
//   import Navbar from '../../Components/Navbar';
import axios from 'axios'
import { useState } from 'react';
import Contact from '../../components/Sections/Footer';
import Nav from '../Home/components/Navbar';


export default function ContactEmpForm() {
    const toast = useToast()
    const [name, setName] = useState('')
    const [empDept, setEmpDept] = useState('')
    const [insights, setInsights] = useState('')
    const [msg, setMsg] = useState('')
    const [error, setError] = useState(false)
    const [load, setLoad] = useState(false)
    const validate = () => {
        let hasError = false;

        if (name.length < 3) {
            hasError = true
            toast({
                position: 'top',
                title: 'Form Incomplete',
                description: 'Please fill you correct Name',
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
        }
        if (insights.length < 10) {
            hasError = true
            toast({
                position: 'top',
                title: 'Form Incomplete',
                description: 'Please fill Insights about the Employee',
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
        }
        // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ((empDept.length < 3)) {
            hasError = true;
            toast({
                position: 'top',
                title: 'Form Incomplete',
                description: 'Enter your Employees Dept',
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
        }
        if (msg.length < 3) {
            hasError = true
            toast({
                position: 'top',
                title: 'Form Incomplete',
                description: 'Please fill your Message/Recommentdation',
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
        }

        console.log("Form validator error is : " + hasError)
        setError(hasError)
        return hasError
    }
    const sendMessage = () => {
        console.log("hello")
        //   // const axios = require('axios');
        const err = validate();
        console.log("API validator is " + err)
        //   if (err) {
        //     // alert("Plz fill the detials")
        //     console.log("Fill in proper detials")
        //   }
        //   else {
        //     setLoad(true)
        //     let data = JSON.stringify({
        //       "name": name,
        //       "email": email,
        //       "number": number,
        //       "message": msg
        //     });

        //     let config = {
        //       method: 'post',
        //       maxBodyLength: Infinity,
        //       url: 'https://synapseop.pythonanywhere.com/sendMessage/',
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       data: data
        //     };

        //     axios.request(config)
        //       .then((response) => {
        //         console.log(JSON.stringify(response.data));
        //         setLoad(false)
        //         toast({
        //           position: 'top',
        //           title: 'Your message has reached',
        //           description: response.data.message,
        //           status: 'success',
        //           duration: 2500,
        //           isClosable: true,
        //         })

        //         setEmail('')
        //         setMsg('')
        //         setName('')
        //         setNumber('')

        //       })
        //       .catch((error) => {
        //         console.log(error);
        //       });

        //   }

    }
    return (
        <>
            <ChakraProvider>
                {/* <Navbar /> */}
                {/* <Nav /> */}
                <Nav />
                <Container maxW="full" mt={3} centerContent overflow="hidden">
                    <Flex>
                        <Box
                            //inside color
                            color="black"
                            borderRadius="lg"
                            // p={{ sm: 5, md: 5, lg: 16 }}
                            m={{ sm: 4, md: 16, lg: 10 }}
                        >
                            <Box p={0} mt={0}>
                                {/* <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}> */}
                                <SimpleGrid gap={12} columns={{ base: 1, md: 2 }} mt={0}>

                                    <WrapItem>
                                        <Box border={'1px solid #F2F4F7'} boxShadow={'5px 10px 20px 0px rgba(129, 198, 232, 0.30)'} borderRadius="lg" width={'500px'} ml={{ base: 5 }} textAlign={'center'} id='conbox'>
                                            <Box m={8} color="#0B0E3F">
                                                <VStack spacing={5}>
                                                    <FormControl id="name">
                                                        {/* <FormLabel>Your Name</FormLabel> */}
                                                        <InputGroup borderColor="#E0E1E7" className='inpfie'>
                                                            <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Name of Employee' size="md" />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="name">
                                                        {/* <FormLabel>Mail</FormLabel> */}
                                                        <InputGroup borderColor="#E0E1E7" className='inpfie'>
                                                            <Input type="text" value={empDept} onChange={e => setEmpDept(e.target.value)} size="md" placeholder='Department of Employee' />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="name">
                                                        {/* <FormLabel>Phone</FormLabel> */}
                                                        <InputGroup borderColor="#E0E1E7" className='inpfie'>
                                                            <Textarea type="text" value={insights} rows={2} onChange={e => setInsights(e.target.value)} size="md" placeholder='Insights ' />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl id="name" >
                                                        {/* <FormLabel>Message</FormLabel> */}
                                                        <Textarea
                                                            borderColor="gray.300"
                                                            _hover={{
                                                                borderRadius: 'gray.300',
                                                            }}
                                                            className='inpfie'
                                                            value={msg}
                                                            onChange={e => setMsg(e.target.value)}
                                                            placeholder="Recommendations"
                                                        />
                                                    </FormControl>
                                                    <FormControl id="name" float="right">

                                                        <button onClick={sendMessage} className='btn12send'>
                                                            {
                                                                !load ? (
                                                                    <>
                                                                        <span>Send</span>
                                                                        <div class="svg-wrapper-1">
                                                                            <div class="svg-wrapper">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                ) : (<CircularProgress isIndeterminate color='black' />)
                                                            }
                                                        </button>
                                                    </FormControl>
                                                </VStack>
                                            </Box>
                                        </Box>
                                    </WrapItem>

                                    <WrapItem color={'white'}>
                                        <Box bg={'linear-gradient(180deg, #7620ff 0%, #7620ff 100%)'} boxShadow={'5px 10px 20px 0px rgba(129, 198, 232, 0.30)'} className='infobox' borderRadius={'lg'} id='conbox'  >
                                            <Heading ml={'40px'} color={'white'} >Empowers individuals to express their honest opinions without fear</Heading>
                                            <br />

                                            <Box marginTop={0} id='box123' py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                                <VStack pl={0} ml={{ base: 0, md: 5 }} align={'flex-start'} justifyContent={'center'} spacing={0} >
                                                    <Text ml={'40px'} color={'white'} mt={{ sm: 2, md: 2, lg: 2 }} >
                                                        Fostering a culture of transparency and open communication
                                                    </Text>
                                                    <br />
                                                    <Text ml={'40px'} color={'white'} mt={{ sm: 2, md: 2, lg: 2 }} >
                                                        By providing anonymity, feedback can reveal hidden issues, leading to constructive changes that improve workplace morale and productivity.
                                                    </Text>
                                                    <br />
                                                    <Text ml={'40px'} color={'white'} mt={{ sm: 2, md: 2, lg: 2 }} >
                                                        This is an anonymous form, please use it responsibly.
                                                    </Text>
                                                </VStack>
                                            </Box>
                                        </Box>
                                    </WrapItem>
                                </SimpleGrid>
                                {/* </Wrap> */}
                            </Box>
                        </Box>
                    </Flex>
                </Container>
                <br />
                {/* <Footer /> */}
            </ChakraProvider>
            <Contact />
        </>

    );
}