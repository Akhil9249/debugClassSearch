// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
// import './App.css'
// import Title from './Component/Title';
import axios from 'axios';
// import {fetchUsers} from'./Component/api'

function App() {
  const[userList,setUserList]=useState([])
   const [count,setCount] = useState(0);
   const [userName, setUserName]=useState("akhil")
   const [toggle,setToggle]=useState(false)

   const increment=()=>{
    
     setCount((prev)=>prev+1)
   }

   const toggleSwitch=()=>{
    setToggle((prev)=>!prev)
   }
  //  console.log(count)
  //  useEffect(()=>{
  //   console.log("inside useEffect")
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //     .then(response => response.json())
  //     .then(json => setUserList(json))
  //   //2c setUserName("arun c v")
  //  },[count])
  //  console.log(userList)

  const fetchUsers = async(userId)=>{
    const response = await axios('https://jsonplaceholder.typicode.com/todos/')
    setUserList(response.data)
  };

  useEffect(()=>{
    fetchUsers()
    // fetchUsers()
   },[count])

   console.log(userList,'==userList')



  return (
    <>
    
     <Title userName={userName} count={count}/>
     <button onClick={increment}>click</button>
     <p>{toggle?'on':'off'}</p>
   <button onClick={toggleSwitch}>click</button>
     {userList.map((data)=>(
            <div key={data.id}>{data.title}</div>
     ))}
    </>
  )
}

export default AppCopy;
