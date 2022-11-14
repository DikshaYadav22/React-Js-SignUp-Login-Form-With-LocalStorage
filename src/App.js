import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
      <Routes>
        <Route exact path="/"  element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
