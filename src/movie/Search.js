import React,{useState} from 'react'

function Search({search}) {
    

const [searchValue, setSearchValue] = useState("");

 //const [searchResults, setSearchResults] = useState([]);

 const handleChange = event => {
    setSearchValue(event.target.value);
 };
const onSubmit = e =>{
    e.preventDefault();
    if((searchValue !== "") && (searchValue.trim())){
    search(searchValue);

    setSearchValue("");}
};

  
    return (
        <div>
        <input
        value={searchValue}
        onChange={handleChange}
        type="text"
        />
        <input type="submit" onClick={onSubmit}/>
      
        </div>
    )
}
export default Search