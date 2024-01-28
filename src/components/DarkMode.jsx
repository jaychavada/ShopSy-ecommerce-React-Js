import { useState,useEffect } from "react";

import lightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

export default function darkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )
    // below line html attribute select kregi
    const element = document.documentElement;

    useEffect(() => {
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[element.classList,theme])
  return (
    <div className="relative">
      <img src={lightButton} 
      alt="LightModeBtn" 
      className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10
      ${theme === "dark" ? "opacity-0" : "opacity-100"}
      `
    }
      onClick={
        () => setTheme(theme === "light"? "dark":"light")
    }
      />
      <img src={DarkButton} alt="DarkModeBtn"
      className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" 
      onClick={
        () => setTheme(theme === "light"? "dark":"light")
    }
      />
    </div>
  );
}
