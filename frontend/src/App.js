import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/Createpost';
import Navbar from "./Components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create-post' element={<CreatePost />}></Route>
      </Routes >
    </>
  );
}

export default App;
