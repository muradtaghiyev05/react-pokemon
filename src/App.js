import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
      setLoading(false);
      setPokemons(res.data.results);
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);})
      .catch((err) => console.log(err));

      return () => cancel();

  }, [currentPage]);

  if (loading) return "Loading";

  function toNextPage() {
    setCurrentPage(nextPage);
  }

  function toPreviousPage() {
    setCurrentPage(previousPage);
  }

  return (
    <div className="App">
      <PokemonList pokemons={pokemons} />
      <Pagination nextPage={nextPage} previousPage={previousPage} toPrevious={toPreviousPage} toNext={toNextPage} />
    </div>
  );
}

export default App;
