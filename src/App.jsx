import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/welcome';
import Question from './components/Question';

import './App.css';
import GameOver from './components/GameOver';

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=> {
    // embaralhar as perguntas
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])
  return (
    <div className='App'>
    <h1>Quiz de Programção</h1>
      {quizState.gameStage === "Start" &&  <Welcome/>}
      {quizState.gameStage === "Playing" &&  <Question/>}
      {quizState.gameStage === "End" &&  <GameOver/>}
    </div>
  )
}

export default App;
