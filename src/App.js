import { useSearchParams } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { MainLayout } from './layout/MainLayout';
import { MainRoutes } from './routes/MainRoutes';

function App() {
  // const {isAuthorized} = useSelector((state) => state.auth)
const [searchParams, setSearchParams] = useSearchParams(false)

const openTodoPage = () => {
  searchParams.set("todos", true);
  setSearchParams(searchParams)
}
const logoutTodoPage = () => {
  searchParams.delete("todos");
  setSearchParams(searchParams)
}

  return (
     <div className="App">
      <Header logOut={logoutTodoPage} searchParams={searchParams}/>
      {
        searchParams.has("todos") ? <MainRoutes /> : <Login openTodoPage={openTodoPage}/>
      }
     
    </div>
  );
}

export default App
 