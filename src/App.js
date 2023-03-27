// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoIncrement from './components/ToDoIncrement';
import ToDoList from './components/ToDoList';
import ToDoImage from './components/ToDoImage';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Aplikasi ToDo List</h1>
      </header>

      <section style={{margin:'1em 0em'}}>
        <ToDoForm/>
        <ToDoList/>
      </section>
<section>
  <ToDoIncrement/>
</section>

<section>
  <ToDoImage/>
</section>
      <footer>
        <h3>Dibuat Oleh Andreass &copy; 2023 </h3>
      </footer>
    </div>
  );
}
export default App

