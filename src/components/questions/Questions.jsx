import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../redux/operations";
import { clearItems, setSelectQuestion } from "../../redux/questionsSlice";
import { addQuestion } from "../../redux/operations";
import { selectLessons, selectQuestions } from "../../redux/selectors";

export const Questions = () => {
  const textRef = useRef();
  const userRef = useRef();
  const dispatch = useDispatch();
  const { selected } = useSelector(selectLessons);
  const { items, selectedQuestion } = useSelector(selectQuestions);

  useEffect(() => {
    if (selected === null) {
      dispatch(clearItems())
    } else {
      dispatch(getQuestions(selected));
    }
  }, [selected, dispatch]);
  const handleAdd = () => {
    const user = userRef.current.value;
    const text = textRef.current.value;
    const lesssonId = selected;
    dispatch(addQuestion({ user: user, text: text, lesson_id: lesssonId }))
  }
  const handleSelect = (id) => {
    dispatch(setSelectQuestion(id));
  }
  return (
    <div>
      <h2>{selected === null ? 'No lessson selected' : 'Questions'}</h2>
      <ul className="list-group">
        {items.length > 0 &&
          items.map((q) => {
            const thisStyle = {};
            if (q.id === selectedQuestion) {
              thisStyle.border = '1px solid red';
            }
            return <li key={q.id} style={thisStyle} className="list-group-item">
              <span onClick={() => handleSelect(q.id)} className='list-item-name'>{q.text} - {q.user}</span>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </li>
          })
        }
        {selected !== null &&
          <li className="list-group-item mt-5">
            <div className="input-group">
              <textarea ref={textRef} type="text" className="form-control" placeholder="Question text"></textarea>
              <input ref={userRef} type="text" className="form-control" placeholder="Your Name" />
              <span onClick={handleAdd} className="input-group-text" id="basic-addon2">Add</span>
            </div>
          </li>
        }
      </ul>
    </div>
  );
}