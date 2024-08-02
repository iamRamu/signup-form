import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Form from './components/Form';
import Teacher from './components/Teacher'
import Student from './components/Student'
import BrowseBookDetails from './components/BrowseBookDetails';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/teacher" element={<Teacher />}/>
        <Route path="/student" element={<Student />} />
        <Route path='/teacher/books/:id' element={<BrowseBookDetails/>}/>
        <Route path='/student/books/:id' element={<BrowseBookDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App