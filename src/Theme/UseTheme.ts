import { type ThemeName } from "./theme";
import { Themes } from "./theme";
import { useState, useEffect } from 'react';


export default function useTheme(ThemeName: ThemeName){
    const [modeName, setModeName] = useState<"light"|"dark">("light")
    const [colorName, setColorName] = useState<ThemeName>("Crimson")

    const theme = Themes[ThemeName]
    const colors = theme[modeName]

    useEffect(() => {
        for (const [variable, value] of Object.entries(colors)) {
            document.documentElement.style.setProperty(`--color-${variable}`, value)
        }
    })
    
    console.log(colors)
}