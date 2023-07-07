import React from 'react'
import './SearchList.css'

export const SearchList = ({searchList}) => {
    //  console.log(searchList)
  return (
    <div className='search-list-container'>
        {searchList.map((data)=>(
            <div className="search-items" key={data.id}>
                {/* console.log(data.id)  */}
            <img height="50" width="50" style={{objectFit:'contain'}} src="https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000" alt="" />
            <p className='title'>{data.name}</p>
        </div>
        ))}
        
    </div>
  )
}



