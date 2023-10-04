import {
    Box,
    ChakraProvider,
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import Nav from './components/Navbar'
import ShowCardForm from './components/ShowCardForm'
import Contact from '../../components/Sections/Footer'
import BarChartComponent from './components/Timeline'
import { useNavigate } from 'react-router'
import { UserType } from '../../context/UserContext'
// import BarChart from './components/Timeline'
// import EmployeeHoursTracker from './components/Timeline'

function Home() {
    const { userId, setUserId } = useContext(UserType)
    console.log("The user id is ", userId)
    const nav = useNavigate()
    const goToForum = (path) => {
        console.log("clicked")
        console.log(path)
        nav(path)
    }
    return (
        <div>
            {/* <EmployeeHoursTracker/> */}
            {/* <BarChart/> */}
            <ChakraProvider>
                <Nav />
                <BarChartComponent />
                <Container maxW={'7xl'} p="12">
                    <Heading as="h1">Live Forms for you to fill...</Heading>
                    <SimpleGrid gap={3} columns={{ base: 1, md: 3 }}>
                        <Box onClick={() => goToForum('/empForm')}>
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
                <Contact />
            </ChakraProvider>
        </div>
    )
}

export default Home
