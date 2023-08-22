const questionsList = [
  { id: 1, text: 'Lectia 1 question', user: 'Andrei 1' },
  { id: 2, text: 'Lectia 2 question', user: 'Andrei 2' },
  { id: 3, text: 'Lectia 3 question', user: 'Andrei 3' },
  { id: 4, text: 'Lectia 4 question', user: 'Andrei 4' },
  { id: 5, text: 'Lectia 5 question', user: 'Andrei 5' },
  { id: 6, text: 'Lectia 6 question', user: 'Andrei 6' }
];

export const Questions = () => {
  return (
    <div>
      <h2>Questions</h2>
      <ul className="list-group">
        {questionsList.length > 0 &&
          questionsList.map((q) => {
            return <li key={q.id} className="list-group-item">
              <span className='list-item-name'>{q.text} - {q.user}</span>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </li>
          })
        }
        <li className="list-group-item">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Question text" />
            <input type="text" className="form-control" placeholder="Your Name" />
            <span className="input-group-text" id="basic-addon2">Add</span>
          </div>
        </li>
      </ul>
    </div>
  );
}