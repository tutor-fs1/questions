import css from './App.module.css';
import { Answers } from './answers/Answers';
import { Lessons } from './lessons/Lessons';
import { Questions } from './questions/Questions';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Lessons />
      <Questions />
      <Answers />
    </div>
  );
};