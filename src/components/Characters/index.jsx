import { useState, useEffect, useReducer, useMemo } from 'react'
import { Character } from '../Character/index';
import { Search } from '../Search';
import { favoritesReducer, initialState } from './reducer/favoritesReducer'
import './styles.scss';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoritesReducer, initialState)
  const [keywordSearch, setKeywordSearch] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const addToFav = (character) => dispatch({ type: 'ADD_TO_FAVORITE', payload: character })

  const handleSearch = (event) => setKeywordSearch(event.target.value)

  const filteredCharacters = useMemo(() => {
    return characters.filter(ct => ct.name.toLowerCase().includes(keywordSearch.toLowerCase()))
  }, [characters, keywordSearch])

  return (
    <div>
      <div className="manage">
        <Search
          onChange={handleSearch}
          placeholder='Search character name...'
        />
      </div>
      <div className='characters'>
        {filteredCharacters.map(character => (
          <Character
            character={character}
            isLiked={state.favorites.some(fav => fav.id === character.id)}
            addToFav={addToFav}
          />
        ))}
      </div>
    </div>
  )
}