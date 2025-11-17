const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-900 py-3 shadow-inner z-40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p className="font-medium text-green-100">Ever Chicas © {new Date().getFullYear()}</p>
        <p className="text-green-900 dark:text-green-100 mt-1">
          Desarrollado con{" "}
          <span className="text-gray-900 dark:text-white">Configurado con Yarn y listo para trabajar.</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;