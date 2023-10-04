import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Grid,
  Flex,
  ChakraProvider,
  Text,
} from '@chakra-ui/react';

const initialStates = { title: '', company: '', location: '', description: '', salary: {min: '', max: ''}, experience: '', skills: [], requirements: '', apply_by: '', employmentType: '', no_of_openings: '', start_date: '' }

const SurveyForm = () => {
  const [formData, setFormData] = useState(initialStates);

  const handleSubmit = () => {
    console.log(formData)
  }
  return (
    <ChakraProvider>
      <Box>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" m='1% 25%'>
        <Heading as="h2" size="lg" mb={4}>
          Survey Form
        </Heading>
        <Text size='xl' mb='2%'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nisi ipsum aut veritatis adipisci nesciunt? Ex unde illo repellendus minus, mollitia ab similique qui doloremque saepe quasi aliquid, error praesentium!
        </Text>
        <form>
          <Grid gridGap={4} gridTemplateColumns="repeat(2, 1fr)">
            <FormControl gridColumn="span 2">
              <FormLabel>Job Title</FormLabel>
              <Input type="text" placeholder="Enter job title" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </FormControl>
            <FormControl gridColumn="span 2">
              <FormLabel>Company Name</FormLabel>
              <Input type="text" placeholder="Enter company name" 
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}              
              />
            </FormControl>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input type="text" placeholder="Enter job location" 
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}              
              />
            </FormControl>
            <FormControl>
              <FormLabel>Job Type</FormLabel>
              <Select placeholder="Select job type"
                value={formData.employmentType}
                onChange={(e) => setFormData({...formData, employmentType: e.target.value})}
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Freelance</option>
              </Select>
            </FormControl>
            <FormControl gridColumn="span 2">
              <FormLabel>Job Description</FormLabel>
              <Textarea placeholder="Enter job description" rows={3} 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}              
              />
            </FormControl>
            <FormControl gridColumn="span 2">
              <FormLabel>Salary Range</FormLabel>
              <Input type="number" placeholder="Minimum salary" 
                value={formData.salary.min}
                onChange={(e) => setFormData({...formData, min: e.target.value})}
              />
              <Input type="number" placeholder="Maximum salary" mt={2} 
                              value={formData.salary.max}
                              onChange={(e) => setFormData({...formData, max: e.target.value})}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Experience Level</FormLabel>
              <Input type="number" placeholder="Experience" mt={2} 
                              value={formData.experience}
                              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Start Date</FormLabel>
              <Input type="date" mt={2}
                            value={formData.start_date}
                            onChange={(e) => setFormData({...formData, start_date: e.target.value})}
              />
            </FormControl>
            <FormControl gridColumn="span 2">
              <FormLabel>Required Skills</FormLabel>
              <Input type="text" placeholder="Enter required skills" 
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
/>
            </FormControl>
            <FormControl gridColumn="span 2">
              <FormLabel>Requirements</FormLabel>
              <Textarea placeholder="Enter requirements" rows={4} 
                            value={formData.requirements}
                            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Application Deadline</FormLabel>
              <Input type="date" 
                            value={formData.apply_by}
                            onChange={(e) => setFormData({...formData, apply_by: e.target.value})}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Number of openings</FormLabel>
              <Input type="number" placeholder="Enter no. of openings" 
                            value={formData.no_of_openings}
                            onChange={(e) => setFormData({...formData, no_of_openings: e.target.value})}
              />
            </FormControl>
            <FormControl gridColumn="span 2">
              <FormLabel>Add Logo</FormLabel>
              <Input type="file" />
            </FormControl>
          </Grid>
          <Box align='center' mt='2%'>
          <Button py='2' px='5%' bgColor='#7268bc' color='white' borderRadius={0} onClick={handleSubmit}>
              Post Job
            </Button>
            </Box>
        </form>
      </Box>
    </Box>
    </ChakraProvider>
  );
};

export default SurveyForm;
