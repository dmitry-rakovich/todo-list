import { Route, Routes } from 'react-router-dom'
import {HomePage} from './pages/HomePage';
import {TodosPage} from './pages/TodosPage';
import {NavLayout} from './components/NavLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavLayout />}>
          <Route path='/' index element={<HomePage />} />
          <Route path='todos' element={<TodosPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
