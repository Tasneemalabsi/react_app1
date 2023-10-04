import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './products';
import Profile from './profile';

function App() {
  return (
    <>
      <Header />

<Router>
  <Routes>
  <Route  path="/" Component={Main} ></Route>
  <Route  path="/products" Component={Products} ></Route>
  <Route  path="/favorites" Component={Profile} ></Route>
  </Routes>
</Router>
    </>
  );
}

export default App;
