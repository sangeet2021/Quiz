import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answered, onSelect }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answered === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if ((answered === "correct" || answered === "wrong") && isSelected) {
          cssClasses = answered;
        }
        return (
          <li key={answer} className="answer">
            <button className={cssClasses} onClick={() => onSelect(answer)} disabled = {answered !== ""}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
