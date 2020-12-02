import React, { useState } from 'react';

const ThemeContext = React.createContext(null);

const Provider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => setDarkMode(prev => !prev)

  const value = {
    isDarkMode,
    handleDarkMode
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  Provider,
  ThemeContext
};