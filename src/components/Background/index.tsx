
import { useContext, useEffect } from "react"
import ThemeContext from "../ThemeContext"
import "./index.scss"
const Background = () => {


    const { isDark } = useContext(ThemeContext)
    return (
        <div className={`background ${isDark ? `background-dark` : ''}`}>   </div>
    );
}

export default Background;