import { useContext } from 'react'
import './App.css';
import { Header } from './components/Header/index';
import { Characters } from './components/Characters/index';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className="App" style={{ backgroundColor: isDarkMode ? '#3f3f3f': '' }}>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
