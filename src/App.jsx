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

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseItems from './Components/Expense/ExpenseItems';
import Person from './Components/Person/person';
import NewExpense from './Components/Expense/NewExpense';
import { useState } from 'react';

function App(){

const expenses=[{id:101, title:'Groceries',amount:900,date:new Date(2020,7,14) },
{id:102 ,title:'New TV',amount:34000,date:new Date(2021,8,12) },
{ id:103, title:'SofaSet',amount:25000,date:new Date(2020,2,4) }]
var count=0;

const [expArr,setExpArr] =useState(expenses)


const onDataHandler=(data)=>{
  console.log('in app',data)
  setExpArr(prevArr=>[data,...prevArr])

}

const renderitem = expArr.map((expArr)=>{
  
  return(
      <ExpenseItems exp={expArr} key={expArr.id}  />

  )
});


  return(
    <div className='App'>
      <NewExpense onData={onDataHandler}/>
     {renderitem}
    </div>
  );
}

export default App;