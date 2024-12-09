import { useContext } from "react";
import { ThemeContext } from "../contexts/useTheme";


export function useTheme(){
    const [isDark,setIsDark] = useContext(ThemeContext)

     return [isDark,setIsDark]
}