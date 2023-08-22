const answerList = [
  'Answer number 1',
  'Answer number 2',
  'Answer number 3',
  'Answer number 4',
  'Answer number 5',
  'Answer number 6',
];

export const Answers = () => {
  return (
    <div>
      <h2>Answers</h2>
      <ul className="list-group">
        {answerList.length > 0 &&
          answerList.map((a) => {
            return <li key={a} className="list-group-item">
              <span className='list-item-name'>{a}</span>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </li>
          })
        }
        <li className="list-group-item">
          <div className="input-group">
            <textarea className="form-control"></textarea>
            <span className="input-group-text" id="basic-addon2">Add</span>
          </div>
        </li>
      </ul>
    </div>
  );
}