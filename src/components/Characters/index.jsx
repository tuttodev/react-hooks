import { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import { useCharacters } from '../../hooks/useCharacters'
import { Character } from '../Character/index';
import { Search } from '../Search';
import { favoritesReducer, initialState } from './reducer/favoritesReducer'
import './styles.scss';

export const Characters = () => {
  const characters = useCharacters()
  const [state, dispatch] = useReducer(favoritesReducer, initialState)
  const [keywordSearch, setKeywordSearch] = useState('')

  const inputSearchRef = useRef();

  const addToFav = (character) => dispatch({ type: 'ADD_TO_FAVORITE', payload: character })

  const handleSearch = useCallback(() => {
    setKeywordSearch(inputSearchRef.current.value)
  }, [])

  const filteredCharacters = useMemo(() => {
    return characters.filter(ct => ct.name.toLowerCase().includes(keywordSearch.toLowerCase()))
  }, [characters, keywordSearch])

  return (
    <div>
      <div className="manage">
        <Search
          onChange={handleSearch}
          placeholder='Search character name...'
          inputSearchRef={inputSearchRef}
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