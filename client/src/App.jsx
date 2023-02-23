import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import AllAuthors from './views/AllAuthors';
import EditAuthor from './views/EditAuthor';
import OneAuthor from './views/OneAuthor';
import NewAuthor from './views/NewAuthor';
import NotFound from './views/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllAuthors/>}/>
        <Route path="/newAuthor" element={<NewAuthor/>}/>
        <Route path="/Authors/:id/edit" element={<EditAuthor/>}/>
        <Route path="/Authors/:id" element={<OneAuthor/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
