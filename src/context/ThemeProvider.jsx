import React from 'react';

// Our global theme context with default values
export const ThemeContext = React.createContext({
  themeMode: false,
  setThemeMode: () => {},
  cookieMode: true,
  setCookieMode: () => {},
  loaderMode: false,
  setLoaderMode: () => {},
  payMode: null,
  setPayMode: () => {},
});

// Theme provider component with state
const ThemeProvider = (props) => {
  const [themeMode, setThemeMode] = React.useState(false);
  const [cookieMode, setCookieMode] = React.useState(true);
  const [loaderMode, setLoaderMode] = React.useState(false);
  const [payMode, setPayMode] = React.useState(null);

  const value = {
    themeMode,
    setThemeMode,
    cookieMode,
    setCookieMode,
    loaderMode,
    setLoaderMode,
    payMode,
    setPayMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const wrapperThemeProvider = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

// Exports a ThemeProvider wrapper
// export default ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
export default wrapperThemeProvider;
