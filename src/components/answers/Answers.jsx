import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "../../redux/selectors";
import { useRef } from "react";
import { updateQuestion } from "../../redux/operations";

export const Answers = () => {
  const { items, selectedQuestion } = useSelector(selectQuestions);
  const dispatch = useDispatch();
  const question = items.find(i => i.id === selectedQuestion);
  const textRef = useRef();
  const handleAddAnswer = () => {
    const newAnswers = [...question.answers];
    newAnswers.push(textRef.current.value);
    dispatch(updateQuestion({ ...question, answers: newAnswers }));
  }
  const handleDelete = (index) => {
    const newAnswers = [...question.answers];
    newAnswers.splice(index, 1);
    dispatch(updateQuestion({ ...question, answers: newAnswers }))
  }
  return (
    <div>
      <h2>Answers</h2>
      <ul className="list-group">
        {question.answers.length > 0 &&
          question.answers.map((a, i) => {
            return <li key={a} className="list-group-item">
              <span className='list-item-name'>{a}</span>
              <button onClick={() => handleDelete(i)} type="button" className="btn-close" aria-label="Close"></button>
            </li>
          })
        }
        <li className="list-group-item mt-5">
          <div className="input-group">
            <textarea ref={textRef} className="form-control"></textarea>
            <span onClick={handleAddAnswer} className="input-group-text" id="basic-addon2">Add</span>
          </div>
        </li>
      </ul>
    </div>
  );
}