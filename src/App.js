import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Details from './components/Details';


function App() {
  return (
      <Routes>
        <Route exact path="/"  element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/details" element={<Details />} />
      </Routes>
  );
}

export default App;
