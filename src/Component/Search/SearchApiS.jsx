import { SearchList } from "./SearchList/SearchList";
import { SearchInputs } from "./SearchInput/SearchInputs";
import "./Search.css";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

//1.Fetch API => Fiter Locally
//2.Fetch API => Filter through API
const API_URL = "https://jsonplaceholder.typicode.com/users";

export function SearchApiS() {

    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchList, setSearchList] = useState([]); //default api data

    const handleChange = (event) => {
        setSearchInputValue(event.target.value);
        // fetchMovieList(event.target.value)
    };

    const clearSearch = () => {
        setSearchInputValue("");
        // SearchList([]);
    };

    const fetchMovieList = async () => {
        try{
            const response = await axios(API_URL, {
                params: {
                    query: searchInputValue,
                },
            });
            setSearchList(response.data);
        }catch(error){
            console.error(error)
        }
    };
    useEffect(() => {
        fetchMovieList();
        // console.log("mount")

        // return()=>{
        //     console.log("un mount")
        // }
    }, [searchInputValue]);

  return (
    <div className="search-container">
    <div className="heading-section">
        <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" />
        <h1>Looking for a movie</h1>
    </div>

    <SearchInputs searchInputValue={searchInputValue} handleChange={handleChange} clearSearch={clearSearch} />
    <SearchList searchList={searchList} />
</div>
  )
}

 
