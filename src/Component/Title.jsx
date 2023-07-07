import React from 'react'

function Title({userName,count}) {

  
  return (
    <div>
      {/* <h1>my name is {userName}</h1> */}
      {count<=5?<h1>my name is {userName}</h1>:null}
      <h1>Count = {count}</h1>
      {/* <button onClick={increment}>click</button> */}
    </div>
  )
}

export default Title
