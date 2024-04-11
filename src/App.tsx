import {useState} from 'react';
import './App.css';
import { Menu } from './components/Menu';
import { Board } from './components/Board';


function App() {

  const [currentTag, setCurrentTag] = useState('');

  function clickMenu(arg:any) {
    setCurrentTag(arg.innerText);
  }

  return (
    <div className="main">
      <Menu onMenuClick={clickMenu} />
      <Board currentTag={currentTag} />
    </div>
  );
}

export default App;
