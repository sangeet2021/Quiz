import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../question";
const Question = ({
  index,
  onSelectAnswer,
  onSkipAnswer,
}) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000)
    }, 1000);
  };

  let answerState = "";
  if (answer.answerState && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }else if(answer.selectedAnswer){
    answerState = 'answer'
  }
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeOut={onSkipAnswer} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answered={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
