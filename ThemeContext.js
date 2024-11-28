import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: '#f8f9fa', 
    color: '#000', 
    borderColor: 'gray',
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      backgroundColor: prevTheme.backgroundColor === '#f8f9fa' ? '#333' : '#f8f9fa',
      color: prevTheme.color === '#000' ? '#fff' : '#000',
      borderColor: prevTheme.borderColor === 'gray' ? '#fff' : 'gray',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
