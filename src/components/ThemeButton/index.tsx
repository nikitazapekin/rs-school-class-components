 /*

import { useContext, useEffect } from "react";
import ThemeContext from "../ThemeContext";
const ThemeButton = () => {
    const theme = useContext(ThemeContext)


    useEffect(()=> {
console.log(theme)
    }, [theme])
    return ( 
        <div className="theme__button">
            Switch Theme  {theme.isDark}
        </div>
     );
}
 
export default ThemeButton;
*/

import { useContext, useEffect } from 'react';
import ThemeContext from '../ThemeContext';

const ThemeButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log({ isDark });
  }, [isDark]);

  return (
    <div className="theme__button" onClick={toggleTheme}>
      Switch Theme {isDark ? 'Dark' : 'Light'}
    </div>
  );
};

export default ThemeButton;
