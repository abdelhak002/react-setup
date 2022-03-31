import React from "react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { ThemeContext } from "./ThemeContext";

const Navigation = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-4 w-11/12 mx-auto flex justify-center">
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <SunIcon className="w-10 h-10 dark:hover:bg-gray-600 rounded-md dark:text-gray-400 text-2xl cursor-pointer transition-all ease-in-out duration-300" />
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <MoonIcon className="w-10 h-10 text-gray-700 text-2xl cursor-pointer transition-all ease-in-out duration-300" />
        </button>
      )}
    </div>
  );
};

export default Navigation;
