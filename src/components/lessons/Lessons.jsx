import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLesson, deleteLesson } from "../../redux/operations";
import { selectLesson } from "../../redux/lessonsSlice";
import { selectLessons } from "../../redux/selectors";
import { setSelectQuestion } from "../../redux/questionsSlice";

export const Lessons = () => {
  const { items, selected, isAdding } = useSelector(selectLessons);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleClick = () => {
    const name = inputRef.current.value;
    dispatch(addLesson(name));
  }
  const handleDelete = (e) => {
    const id = e.target.id;
    dispatch(deleteLesson(id));
  }
  const handleSelect = (id) => {
    dispatch(selectLesson(id));
    dispatch(setSelectQuestion(null));
  }
  return (
    <div>
      <h2>Lessons</h2>
      <ul className="list-group">
        {items.length > 0 &&
          items.map((l) => {
            const thisStyle = {};
            if (l.id === selected) {
              thisStyle.border = '1px solid red';
            }
            return <li key={l.id} className="list-group-item" style={thisStyle}>
              <span onClick={() => handleSelect(l.id)} className='list-item-name'>{l.name}</span>
              <button id={l.id} onClick={handleDelete} type="button" className="btn-close" aria-label="Close"></button>
            </li>
          })
        }
        <li className="list-group-item mt-5">
          <div className="input-group">
            <input ref={inputRef} type="text" className="form-control" placeholder="New Lesson" disabled={isAdding ? true : false} />
            <span onClick={handleClick} className="input-group-text" id="basic-addon2">Add</span>
          </div>
        </li>
      </ul>
    </div>
  );
}