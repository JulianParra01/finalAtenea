import Axios from "axios";
import React, { Fragment, useState } from "react";
import celebritySlices from "../reducers/slices/celebritySlices";
import Celebrities_List from "./Celebrities_List";
import Home from "../pages/Home";

const SearchBar = () => {

    const [celData, setCelData] = useState();
    const [celebrity, setCelebrity] = useState();
    function handleChange(e) {
        e.preventDefault();
        setCelebrity(e.target.value);
    }

    function getCelData() {
        const key = process.env.REACT_APP_KEY;
        const headers = { 'X-Api-Key': key }
        const nombre = 'Michael Jordan'
        const url = `${process.env.REACT_APP_URL_NAME}=${celebrity}`;
        Axios.get(url, { headers })
            .then(res => {
                setCelData(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <Fragment>


            <div>
                <nav class="navbar bg-success-subtle p-2 ">
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 bg-success p-2 text-darkd bg-opacity-25" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                              <button class="btn bg-success p-2 text-white " type="submit" onClick={getCelData}>Search</button>
                              </form>    
                    </div>
                </nav>
                {celData ? (<Celebrities_List celebrities={celData} />) : (<Home />)}

            </div>
        </Fragment>
    )
}

export default SearchBar