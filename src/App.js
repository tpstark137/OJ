import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from'./components/Home'
import ProblemList from './components/ProblemList';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Workspace from './components/Workspace';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/problemList" element={<ProblemList/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<SignUp/>} />
    <Route path="/editor" element={<Workspace/>}/>

    </Routes>
     </BrowserRouter>
   
     
    </div>
  );
}

export default App;
