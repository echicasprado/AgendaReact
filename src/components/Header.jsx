import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          🚀 React + Vite + TailwindCSS
        </h1>
        <ThemeToggler />
      </div>
    </header>
  );
};
export default Header;
