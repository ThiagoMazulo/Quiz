
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import './Question.css'

import Option from './Option';

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestions = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option)=> {
      dispatch ({
        type: "CHECK_ANSWER",
        payload: {answer: currentQuestions.answer, option},
      })
    } ;

    console.log(quizState)
  return (
    <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestions.question}</h2>
      <div  id="options-container">
        {currentQuestions.options.map((option)=> (
          <Option 
          option = {option}
           key={option}
            answer={currentQuestions.answer}
            selectOption={()=>onSelectOption(option)}
            />
        ))}
       {quizState.answerSelected && (<button onClick={()=> dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>)}
      </div>

    </div>
  );
};

export default Question;