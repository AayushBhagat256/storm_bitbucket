import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  Select,
  Textarea,
  Input,
  Text,
} from '@chakra-ui/react';
import { questionaire } from './questionData/questions';
import { ipAddress } from '../../Ip';
import axios from 'axios';

const SurveyCreationTool = () => {
  // const initialQuestion = {
  //   type: 'multiple_choice',
  //   question: '',
  //   choices: [''],
  // };

  const [questions, setQuestions] = useState(questionaire.questions);
  const [questionType, setQuestionType] = useState('multiple_choice');
  const [questionText, setQuestionText] = useState('');
  // console.log(questions)
  const handleSubmit = () => {
    axios.post(ipAddress + 'forms/new_form/', {
      title : questionaire.title,
      questions: questions
    }
      );
  };

  const handleAddQuestion = () => {
    if (questionText) {
      const newQuestion = {
        type: questionType,
        question: questionText,
        choices: questionType === 'multiple_choice' ? [''] : [],
      };
      setQuestions([...questions, newQuestion]);
      setQuestionText('');
    }
  };

  const handleEditQuestionText = (index, newText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = newText;
    setQuestions(updatedQuestions);
  };

  const handleEditOptionText = (questionIndex, optionIndex, newOptionText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].choices[optionIndex] = newOptionText;
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].choices.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].choices.push('');
    setQuestions(updatedQuestions);
  };

  const renderQuestions = () => {
    return questions.map((question, index) => (
      <Box key={index} p={4} border="1px solid #ccc" borderRadius="md">
        <Heading size="md">Question {index + 1}</Heading>
        <Box mt={2} width={'670px'}>
          <Textarea
            placeholder="Enter your question here"
            value={question.question}
            onChange={(e) => handleEditQuestionText(index, e.target.value)}
          />
        </Box>
        {question.type === 'multiple_choice' && (
          <Box mt={2}>
            {question.choices.map((option, optionIndex) => (
              <HStack key={optionIndex} mt="2%">
                <Input
                  placeholder="Option"
                  value={option}
                  onChange={(e) =>
                    handleEditOptionText(index, optionIndex, e.target.value)
                  }
                />
                <Button
                  onClick={() => handleRemoveOption(index, optionIndex)}
                  colorScheme="red"
                >
                  Remove
                </Button>
              </HStack>
            ))}
            <Button
              onClick={() => handleAddOption(index)}
              mt={2}
              colorScheme="green"
            >
              Add Option
            </Button>
          </Box>
        )}
        <Button
          onClick={() => handleRemoveQuestion(index)}
          mt={2}
          colorScheme="red"
        >
          Remove Question
        </Button>
      </Box>
    ));
  };

  return (
    <Box>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" m="1% 25%">
        <Heading as="h1" mb={4}>
          Survey Creation Tool
        </Heading>
        <Text mb="2%">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          laudantium culpa maiores quod, eaque sapiente magnam adipisci amet
          animi sint deserunt tempora architecto quam ad. Sed necessitatibus
          impedit officia facere.
        </Text>
        <VStack spacing={4} align="flex-start">
          <Textarea
            placeholder="Enter your question here"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <Select
            placeholder="Select question type"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option value="multiple_choice">Multiple Choice</option>
            <option value="open-ended">Open-ended</option>
            <option value="rating_scale">Rating Scale</option>
          </Select>
          <Button onClick={handleAddQuestion} colorScheme="blue">
            Add Question
          </Button>
          {renderQuestions()}
        </VStack>
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
};

export default SurveyCreationTool;
