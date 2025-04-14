import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { addTodo, deleteTodo, editTodo, todoFinished } from './slices/todoSlice'
import { bindActionCreators } from 'redux' 
function App() {
  const dispatch = useDispatch()
  const actions = bindActionCreators({ addTodo, deleteTodo, editTodo, todoFinished }, dispatch)
  return (
    <>
      <AddTodo addTodo={actions.addTodo} />
      <TodoList deleteTodo={actions.deleteTodo} todoFinished={actions.editTodo} editTodo={actions.editTodo} />
    </>
  )
}

export default App
