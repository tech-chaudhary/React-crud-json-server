import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './user/Home';
import UserInsert from './user/UserInsert';
import UserView from './user/UserView';
import UserUpdate from './user/UserUpdate';

function App() {
  return (
    <>
    <Home/>

    <div className='mid'>
      <Routes>
        <Route path='/' element={<h1> Welcome to react Curd App</h1>}></Route>
        <Route path='/' element={<img src=''/>}></Route>
        <Route path='/insert' element={<UserInsert/>}></Route>
        <Route path='/view' element={<UserView/>}></Route>
        <Route path='/update/' element={<UserUpdate/>}></Route>
      </Routes>
    </div>
    
    
    </>
  );
}

export default App;
