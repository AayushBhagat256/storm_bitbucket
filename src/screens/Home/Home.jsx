import {
    Box,
    ChakraProvider,
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import React from 'react'
import Nav from './components/Navbar'
import ShowCardForm from './components/ShowCardForm'
import Contact from '../../components/Sections/Footer'
import EmployeeHoursTracker from './components/Timeline'

function Home() {
    const goToForum = () => {
        console.log("clicked")
    }
    return (
        <div>
            <ChakraProvider>
                <Nav />
                <Container maxW={'7xl'} p="12">
                    <EmployeeHoursTracker/>
                    <Heading as="h1">Live Forms for you to fill...</Heading>
                    <SimpleGrid gap={3} columns={{base:1,md:3}}>
                        <Box onClick={()=>goToForum()}>
                        <ShowCardForm title={"Employee's feedback"} />
                        </Box>
                        <Box>
                        <ShowCardForm title={"Survey Form"} />
                        </Box>
                        <Box>
                        <ShowCardForm title={"Pulse Form"} />
                        </Box>
                    </SimpleGrid>
                </Container>
                <Contact/>
            </ChakraProvider>
        </div>
    )
}

export default Home
