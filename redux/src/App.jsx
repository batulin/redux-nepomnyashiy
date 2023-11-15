import './App.css';
import {useState} from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('');
    }
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodoComplete = (id) => {
    setTodos(
        todos.map(
            todo => {
                if (todo.id !== id) return todo;

                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
        )
    )
  }

  return (
    <div className="App">
      <InputField text={text} handleChange={setText} handleSubmit={addTodo} />
      <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
