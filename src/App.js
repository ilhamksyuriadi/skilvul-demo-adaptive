import TodoItem from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='landing'>
        <div>
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div>
          <img alt="temp-imag" src='https://picsum.photos/200/300'>
          </img>
        </div>
      </div>
      <TodoItem id={1} content="Learn how to design" />
      <TodoItem id={2} content="Go to the gym" />
      <TodoItem id={3} content="Launch first application" />
      <TodoItem id={4} content="Try cooking" />
      <TodoItem id={5} content="Attemp online course" />
      <TodoItem id={6} content="Preparation for the interview" />
    </div>
  );
}

export default App;
