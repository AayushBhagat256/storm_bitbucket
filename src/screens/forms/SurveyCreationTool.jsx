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
import {questionaire} from './questionData/questions';

const SurveyCreationTool = () => {
    const list = questionaire.sections;
    // const [ques] = list.questions;
    // console.log([list[0].question])
    const ques = [];
    list.map(que => (
        ques.push(que.questions)
))
    // const listOfQuestions = []
    // ques.map(que => (
    //     listOfQuestions.push(que)
    // ))
  const [questions, setQuestions] = useState(ques);
  const [questionType, setQuestionType] = useState('multiple_choice');
  const [questionText, setQuestionText] = useState('');

  const handleSubmit = () => {
  console.log(questions)
  }
  const handleAddQuestion = () => {
    if (questionText) {
      setQuestions([
        ...questions,
        {
          type: questionType,
          text: questionText,
          options: questionType === 'multiple_choice' ? [''] : [],
        },
      ]);
      setQuestionText('');
    }
  };

  const handleEditQuestionText = (index, newText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = newText;
    setQuestions(updatedQuestions);
  };

  const handleEditOptionText = (questionIndex, optionIndex, newOptionText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = newOptionText;
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (questionIndex, newOptionText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push(newOptionText);
    setQuestions(updatedQuestions);
  };

  const renderQuestions = () => {
    return questions.map((question, index) => (
        question.map((q, i)=> (
      <Box key={index} p={4} border="1px solid #ccc" borderRadius="md">
        <Heading size="md">Question {i + 1}</Heading>
        <Box mt={2} width={'670px'}>
          <Textarea
            placeholder="Enter your question here"
            value={q.question}
            onChange={(e) => handleEditQuestionText(index, e.target.value)}
          />
        </Box>
        {q.type === 'multiple_choice' && (
          <Box mt={2}>
            {q.choices.map((option, optionIndex) => (
              <HStack key={optionIndex} mt='2%'>
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
              onClick={() => handleAddOption(index, '')}
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
    ))));
  };

  return (
    <Box>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" m='1% 25%'>
      <Heading as="h1" mb={4}>
        Survey Creation Tool
      </Heading>
      <Text mb='2%'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium culpa maiores quod, eaque sapiente magnam adipisci amet animi sint deserunt tempora architecto quam ad. Sed necessitatibus impedit officia facere.
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
