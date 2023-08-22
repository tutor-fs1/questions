const lessonsList = [
  { id: 1, name: 'Lectia 1' },
  { id: 2, name: 'Lectia 2' },
  { id: 3, name: 'Lectia 3' },
  { id: 4, name: 'Lectia 4' },
  { id: 5, name: 'Lectia 5' },
  { id: 6, name: 'Lectia 6' }
];

export const Lessons = () => {
  return (
    <div>
      <h2>Lessons</h2>
      <ul className="list-group">
        {lessonsList.length > 0 &&
          lessonsList.map((l) => {
            return <li key={l.id} className="list-group-item">
              <span className='list-item-name'>{l.name}</span>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </li>
          })
        }
        <li className="list-group-item">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="New Lesson" />
            <span className="input-group-text" id="basic-addon2">Add</span>
          </div>
        </li>
      </ul>
    </div>
  );
}