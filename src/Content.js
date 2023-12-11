import React from 'react'
import { useState } from 'react';

const Content = () => {

   /*  function handleNameChange() {
        const names = ["Earn", "Grow", "Give"];
        const int = Math.floor(Math.random()*3);
        return names[int];
      } */

      /* Click Events */
/*       const handleClick = (e) => {
        return(
            (e.target.innerText ="Subscribed")
            )
      }

      const handleClick2 = (name) => {
        return(alert(`Thanks for the support ${name}`))  
      } */
      /* ---------------X---------X--------X------ */

      /* useState is carrying on two array value:
                1.defalut value */
                /* 2.changable value */

      /* function namee () {
        return console.log("Hi, i'm Praveen")
      }

      const [count, setCount] = useState(10);
      const [name, setName] = useState(() => namee());


      function incrementFunction(){
        setCount((precount) => {return precount + 1})
        setCount((count) => {return count + 1})
      }

      function decrementFunction (){
        setCount((count) => {return count -1})
        setCount((count) => {return count -1})
      } */


    const [names, setNames] = useState("Earn");

    function handleNameChange() {
        const name = ["Earn", "Grow", "Give"];
        const int = Math.floor(Math.random()*3);
        setNames(() => name[int])
    }
   
  return (
    <main>
        <p /* onDoubleClick={() => handleClick2('Praveen')} */> Let's {names} Money</p>
        <button onClick={() => handleNameChange()}>Click</button>
      {/*   <button onClick={()=> decrementFunction()}>-</button>
        <span>{count}</span>
        <button onClick={()=> incrementFunction()}>+</button> */}
    </main>  
  )
}

export default Content