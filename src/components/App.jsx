import css from './App.module.css';
import { useEffect } from 'react';
import { Lessons } from './lessons/Lessons';
import { useDispatch, useSelector } from 'react-redux';
import { getLessons } from '../redux/operations';
import { Answers } from './answers/Answers';
import { Questions } from './questions/Questions';
import { selectLessons, selectQuestions } from '../redux/selectors';

export const App = () => {
  const { selected } = useSelector(selectLessons);
  const { selectedQuestion } = useSelector(selectQuestions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLessons());
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <Lessons />
      {selected !== null && <Questions />}
      {selectedQuestion !== null && selected !== null && <Answers />}
    </div>
  );
};