
import { useContext, useEffect } from "react"
import ThemeContext from "../ThemeContext"
import "./index.scss"
const Background = () => {


    const { isDark } = useContext(ThemeContext)
    useEffect(() => {
        console.log("b", isDark)
    }, [isDark])
    return (
        <div className={`background ${isDark ? `background-dark` : ''}`}>   </div>
    );
}

export default Background;