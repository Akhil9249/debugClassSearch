import React from "react";
import { useState, useEffect } from "react";
import Title from "./Component/Title";
// import {fetchUsers} from'./Component/api'
import axios from "axios";
// import Title from "./Component/Title";

export default function AppSub() {
    const [userName, setUserName] = useState("akhil");
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [userList, setUserList] = useState([]);

    const increment = () => {
        setCount((prev) => prev + 1);
    };
    // useEffect(() => {
    //     fetchUsers();
    //     // fetchUsers()
    // }, [count]);
    const toggleSwitch = () => {
        setToggle((prev) => !prev);
    };

      //  const [firstName,setFirstName]=useState("")

    //  console.log(count)
    //  useEffect(()=>{
    //   console.log("inside useEffect")
    //   fetch('https://jsonplaceholder.typicode.com/todos/')
    //     .then(response => response.json())
    //     .then(json => setUserList(json))
    //   //2c setUserName("arun c v")
    //  },[count])
    //  console.log(userList)

    const fetchUsers = async (userId) => {
      const response = await axios("https://jsonplaceholder.typicode.com/todos/");
      setUserList(response.data);
  };

  //  console.log(userList,'==userList')

    return (
        <div>
            <button onClick={increment}>click</button>
            <Title userName={userName} count={count} />
            <p>{toggle ? "on" : "off"}</p>
            <button onClick={toggleSwitch}>click</button>
             {/* {userList.map((data)=>(
            <div key={data.id}>{data.title}</div>
            ))} */}
        </div>
    );
}
