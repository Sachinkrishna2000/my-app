
import './App.css';
import NavBar from './Components/NavBar';
import { Route,Routes } from 'react-router-dom';
import Functional from './Components/Functional';
import ClassComponent from './Components/ClassComponent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="funcom" element={<Functional/>}></Route>
      <Route path="classcom" element={<ClassComponent/>}></Route>
      {/* <Route path="*" element={<PageNotFound/>}></Route> */}
     </Routes>
    </div>
  );
}

export default App;
