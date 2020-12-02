import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './styles.scss';

export const Header = () => {
  const { isDarkMode, handleDarkMode } = useContext(ThemeContext);

  return (
    <div className="header" style={{ backgroundColor: isDarkMode ? '#555' : '#ccc' }}>
      <h1 style={{ color: isDarkMode ? '#fff' : '' }}>ReactHooks</h1>
      <button
        style={{
          backgroundColor: isDarkMode ? '#fff' : '#000',
          color: isDarkMode ? '#000' : '#fff'
        }}
        className='header__btn-darkmode'
        type="button"
        onClick={handleDarkMode}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div >
  );
}