import { useState } from "react";
import styled from "styled-components";

const ExerciseContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background-color: ${(props) => props.theme.altBackground};
`;

const ExerciseCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 90%;
  margin-bottom: 2rem;
`;

const Question = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  color: black;
  margin-bottom: 2rem;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontmd};
  color: black;
  margin-bottom: 1rem;
  cursor: pointer;

  input[type="radio"] {
    margin-right: 1rem;
  }
`;

const ConfirmButton = styled.button<{ isSelected: boolean; isDisabled: boolean }>`
  background-color: ${(props) => (props.isSelected ? "green" : props.isDisabled ? "gray" : "green")};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
`;

const ScoreContainer = styled.div`
  position: fixed;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: darkblue;
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  color: white; /* Cambia el color de los puntos aquí */
  transition: transform 0.3s;
  z-index: 1;

  &:hover {
    transform: translateX(-50%) scale(1.15); /* Efecto de zoom al pasar el mouse */
    transform-origin: center top; /* Punto de origen del zoom centrado horizontalmente */
  }
`;

const MaxAttempts = 2;

const TotalQuestions = 4;

const questions = [
  {
    question: "What is blockchain?",
    options: ["A type of building material", "A type of spreadsheet software", "A digital ledger technology", "A type of encryption algorithm"],
    correctOption: "option3",
  },
  {
    question: "Which cryptocurrency is often referred to as 'digital gold'?",
    options: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"],
    correctOption: "option1",
  },
  {
    question: "What is a smart contract in blockchain terminology?",
    options: ["A legally binding document", "An automated program that executes predefined actions when certain conditions are met", "A type of blockchain consensus algorithm", "A cryptographic key pair"],
    correctOption: "option2",
  },
  {
    question: "What is the process of adding a new block of transactions to the blockchain called?",
    options: ["Mining", "Smelting", "Casting", "Forging"],
    correctOption: "option1",
  },
];

const Level1ExerciseEs = () => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string | null }>({});
  const [attempts, setAttempts] = useState<{ [key: string]: number }>({});
  const [points, setPoints] = useState(0);

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: optionId,
    }));
  };

  const handleConfirm = (questionId: string, correctOption: string) => {
    if (selectedOptions[questionId] === correctOption) {
      if (points < 4) {
        setPoints((prevPoints) => prevPoints + 1);
      }
    } else {
      setAttempts((prevAttempts) => ({
        ...prevAttempts,
        [questionId]: (prevAttempts[questionId] || 0) + 1,
      }));
      if ((attempts[questionId] || 0) + 1 >= MaxAttempts) {
        setAttempts((prevAttempts) => ({
          ...prevAttempts,
          [`q${questionId}`]: MaxAttempts,
        }));
        for (let i = 1; i <= TotalQuestions; i++) {
          setAttempts((prevAttempts) => ({
            ...prevAttempts,
            [`q${i}`]: MaxAttempts,
          }));
        }
      }
    }
  };

  const isDisabled = (questionId: string) => {
    return (attempts[questionId] || 0) >= MaxAttempts || points === 4;
  };

  return (
    <ExerciseContainer>
      {questions.map((q, index) => (
        <ExerciseCard key={`question-${index}`}>
          <Question>{`Question ${index + 1}: ${q.question}`}</Question>
          {q.options.map((option, optionIndex) => (
            <Option key={`question-${index}-option-${optionIndex}`}>
              <input
                type="radio"
                id={`q${index + 1}_option${optionIndex + 1}`}
                name={`q${index + 1}`}
                value={`option${optionIndex + 1}`}
                onChange={() => handleOptionSelect(`q${index + 1}`, `option${optionIndex + 1}`)}
                disabled={isDisabled(`q${index + 1}`)}
              />
              <span>{option}</span>
            </Option>
          ))}
          <ConfirmButton
            isSelected={selectedOptions[`q${index + 1}`] === q.correctOption}
            onClick={() => handleConfirm(`q${index + 1}`, q.correctOption)}
            isDisabled={isDisabled(`q${index + 1}`)}
          >
            Confirm
          </ConfirmButton>
        </ExerciseCard>
      ))}
      <ScoreContainer>Points: {points} / 4</ScoreContainer>
    </ExerciseContainer>
  );
};

export default Level1ExerciseEs;
