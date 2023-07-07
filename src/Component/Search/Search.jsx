import React, { useEffect, useState } from "react";

import { SearchList } from "./SearchList/SearchList";
import { SearchInputs } from "./SearchInput/SearchInputs";
import "./Search.css";
import axios, { Axios } from "axios";

//1.Fetch API => Fiter Locally
//2.Fetch API => Filter through API
const API_URL = "https://jsonplaceholder.typicode.com/users";

export const Search = () => {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchList, setSearchList] = useState([]); //default api data
    const [filteredList, setFilteredList] = useState([]); //FIRST

    const handleChange = (event) => {
        setSearchInputValue(event.target.value);

        const newFilterdItems = searchList.filter((data) => {
            return data.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setFilteredList(newFilterdItems);
    };

    const clearSearch = () => {
        setSearchInputValue("");
        setFilteredList([]);
    };

    const fetchMovieList = async () => {
        const response = await axios(API_URL, {
            params: {
                // query:searchInputValue,
                query: "movie",
            },
        });
        setSearchList(response.data);
        setFilteredList(response.data);
    };

    useEffect(() => {
        fetchMovieList();
    }, []);

    return (
        <div className="search-container">
            <div className="heading-section">
                <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" />
                <h1>Looking for a movie</h1>
            </div>

            <SearchInputs searchInputValue={searchInputValue} handleChange={handleChange} clearSearch={clearSearch} />
            <SearchList searchList={filteredList} />
        </div>
    );
};
