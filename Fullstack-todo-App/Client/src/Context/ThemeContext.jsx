import React,{useState} from "react";

const ThemeContext=React.createContext()

function ThemeContextProvider(props){
const [theme,setTheme]=useState("dark")

const toggleTheme=()=> setTheme(prev=>prev==="dark" ? "light" : "dark")

return(
<ThemeContext.Provider value={{theme, toggleTheme}}>
		{props.children}
	</ThemeContext.Provider>
	
)

}

export {ThemeContext,ThemeContextProvider}