import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import NavBar from './components/NavBar';
import Content from './components/Content';
import { ExclamationCircleOutlined } from '@ant-design/icons';


function App() {
  const [ isLoading, setLoading ] = useState(true);
  const [ searchTerm, setSearch ] = useState("");
  const [ noData, setNoData ] = useState(true);
  const [ character, setCharacter ] = useState([]);
  const [ films, setFilms ] = useState([]);
  const [ starships, setStarships ] = useState([]);
  const [ species, setSpecies ] = useState("");

  useEffect(() => {
    //SWAPI API Call
    const swapiApi = `https://swapi.dev/api/people/?search=${searchTerm}`;
    axios.all([ axios
      .get(swapiApi)])
      .then(
        axios.spread((res) => {
          //Set Character Data
          if (!res.data.results[0]) {
            return setNoData(true);
          } else ( setCharacter(res.data.results[0]) );
          //Set Film Titles Data
          res.data.results[0].films.map((f) => {
            axios
              .get(f)
              .then(FResp => { setFilms(films => [...films, FResp.data.title]);})
          });
          //Set Starships Names Data
          res.data.results[0].starships.map((s) => {
            axios
              .get(s)
              .then(SResp => { setStarships(starships => [...starships, SResp.data.name]);})
          });
          //Set Species Data
          //If species is not null, find Species Name
          if (res.data.results[0].species[0] != null) {           
            axios
              .get(res.data.results[0].species[0])
              .then(SpResp => { setSpecies(SpResp.data.name); });
            } else { setSpecies("N/A");}
        }))   
      .catch((error) => console.log(error)); 
    setLoading(false);
  }, [searchTerm]);

  console.log(character)

  return (
    <div className="bg-roast h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col h-3/4 w-1/2 bg-brown rounded-2xl">
        <NavBar setSearch={setSearch} setNoData={setNoData}/>
        {(noData) ? ( 
          <div className="justify-center items-center flex flex-col h-full w-full">
            <ExclamationCircleOutlined className="text-black" style={{ fontSize: '100px'}}/>
            <div className="text-black text-2xl mt-3">No Data</div>
          </div>
        ) : (
          <Content character={character} searchTerm={searchTerm} isLoading={isLoading} starships={starships} films={films} species={species} setNoData={setNoData}/>)}
      </div>
    </div>
  );
}

export default App;
