import { useState } from 'react';
import './App.css';


function App() {

  const [state, setState] = useState([]);
  const [myCheck, setMyCheck] = useState("");

  const valueHandler = (e) => {
    const val = e.target.getAttribute("data");
    setState([...state, val]);
  }
  
  const operationHandler = (e) => {
    const op = e.target.getAttribute("data");
    setState([...state ,op]);
  }

  const deleteHandler = () => {
    setState(n => n.slice(0, -1));
  }

  const nullHandler = () => {
    setState([]);
  }

  const calculationHandler = () => {

    let check = state.filter(function(element) {
      return isNaN(element);
    }).length > 1;

    if(check){
      setMyCheck("not");
      return;
    }

    setMyCheck("");

    const h = state.find(function(item) {
      if(item === ".") {
        return;
      }
      return isNaN(item)
    })
    const elementBefore = state.slice(0, state.indexOf(h))
    const elementsAfter = state.slice(state.indexOf(h) + 1);
    const ele = parseFloat(elementBefore.join(""));
    const ele2 = parseFloat(elementsAfter.join(""));
    let cal;

    console.log('ele = '+ ele + " ele2 = "+ele2);
    console.log(typeof(parseFloat("2.23")))

    if(h === "+"){
      console.log('jkdjfkd');
      cal = ele + ele2;
    }

    if(h === "×"){
      cal = ele * ele2;
    }

    if(h === "÷"){
      cal = ele / ele2;
    }

    if(h === "-"){
      cal = ele - ele2;
    }
    
    console.log(cal);
    const result = cal.toString().split("");
    setState(result)
  }

  
  

  return (
    <>
    {(myCheck === "not") && <h1 style={{color: "red"}}>Check your Input please.</h1>}
    <div className="calculator-grid">
      <div className="output">
        <div className='current-operand'>{
          state.map((num) => num)
        }</div>
      </div>
      <button className='span-two op' id='AC'data={"AC"} onClick={nullHandler}>AC</button>
      <button className="op" data={"DEL"} onClick={deleteHandler}>DEL</button>
      <button data={"÷"} className="op" onClick={operationHandler}>÷</button>
      <button data={1} onClick={valueHandler}>1</button>
      <button data={2} onClick={valueHandler}>2</button>
      <button data={3} onClick={valueHandler}>3</button>
      <button data={"×"} className="op" onClick={operationHandler}>×</button>
      <button data={4} onClick={valueHandler}>4</button>
      <button data={5} onClick={valueHandler}>5</button>
      <button data={6} onClick={valueHandler}>6</button>
      <button data={"+"} className="op" onClick={operationHandler}>+</button>
      <button data={7} onClick={valueHandler}>7</button>
      <button data={8} onClick={valueHandler}>8</button>
      <button data={9} onClick={valueHandler}>9</button>
      <button data={"-"} className="op" onClick={operationHandler}>-</button>
      <button data={"."} onClick={operationHandler}>.</button>
      <button data={0} onClick={valueHandler}>0</button>
      <button className='span-two op1' data={"="} onClick={calculationHandler}>=</button>
    </div>
    </>
  );
}

export default App;
