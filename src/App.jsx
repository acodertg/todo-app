import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext'
import todoReducers from './reducers/todoReducers'
import TodoDispatchContext from './context/TodoDispatchContext'

function App() {
  const [list, dispatch] = useReducer(todoReducers, [
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: true }
  ])
  return (
    <TodoContext.Provider value={{ list }} >
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
