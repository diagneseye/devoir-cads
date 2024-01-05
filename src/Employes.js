import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const employes = ()=> {
  const[datas, setDatas] = useState([]);

  const fetchEMployees =async()=>{
    const resp = await fetch("https://dummy.restapiexample.com/api/v1/employees")
    const data = await resp.json()
    setDatas(data);
    console.log(data)
  }
 
  fetchEMployees();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
