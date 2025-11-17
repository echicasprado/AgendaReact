import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 
      dark:text-white font-semibold"
    >
      {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ThemeToggler;
