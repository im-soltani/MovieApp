import React ,{useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import MovieList from './movie/MovieList';
import ModalAdd from "./movie/ModalAdd";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./movie/Search";
import Rating from "./movie/Rating";



function App() {
  const [movies, setmovies] = useState([
    {
      id:uuidv4(),
      image:
      "https://celebrity.tn/wp-content/uploads/2019/02/prix-du-public-dachra-%C3%A9lu-meilleur-film-tunisien-de-l39ann%C3%A9e.png",
      name:"Dachra",
      year:"2019",
      rating:4,
      
    },
    {
      id:uuidv4(),
      image:"https://fr.web.img4.acsta.net/pictures/19/08/29/09/20/1546400.jpg",
      name:"Jocker",
      year:"2020",
      rating:4,
      
    },
    {
      id:uuidv4(),
      image:"https://fr.web.img6.acsta.net/pictures/16/11/18/11/16/356441.jpg",
      name:"the invisible guest",
      year:"2005",
      rating:2,
      
    }
  
  ]);
  /*const addMovie = (newMovie) => {
    setmovies(
      movies.concat({...newMovie,id:uuidv4()})
    )
  }*/
    /*function addTodo(todo){
      const newTodos = [...todos,
        {text:todo,
          id:todos.length
         }];
      setTodos(newTodos);
    }*/
   /* function addMovie(image,name,year,rating) {
 const newMovie = [...movies,{id:uuidv4(),image:image,name:name,year:year,rating:rating}];
 setmovies(newMovie);
    }*/
    const [searchTerm, setSearchTerm] = useState("");
      const [star,setStar]= useState (0);


    const addMovie=(id,image,name,year,rating)=>{
      const newMovie={id:id,image:image,name:name,year:year,rating:rating}
      setmovies([...movies,newMovie]);

    }
      
      //const [searchResults, setSearchResults] = useState([]);
      const results = movies.filter(movie =>
        (movie.name.toLowerCase().includes(searchTerm.toLowerCase()))&&(movie.rating>=star)
      );
      //setSearchResults(results);
     const search=(input) => {
      setSearchTerm(input);
     }
     //rating
     const StarS = (input) => {
      setStar(input)
     }
    
    
 
    return (
    <div className="App">
      <header className="App-header">
       <h1>Movie App</h1>
       <h2>List Movies</h2>
       <MovieList movies={results}/>
       <ModalAdd addMovie={addMovie} />
       <Search search={search} />
       <Rating StarS={StarS}/>
      </header>
    </div>
  );
}

export default App;
