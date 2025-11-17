import { useState } from "react";
import { v4 as uuid} from 'uuid';

const FormAddContact = ({ dispatch }) => {
  const [data, setData] = useState({
    id: "",
    nombre: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const {nombre, email, phone, website} = data;

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid().split('-')[0],
      name:nombre,
      email,
      phone,
      website,
    },
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setData({id:'',nombre:'',email:'',phone:'',website:''});
    dispatch(actionAdd);
  };

  return (
    <form className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
        Agregar Contacto
      </h2>
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Nombre:{" "}
          <input
            name="nombre"
            type="text"
            value={nombre}
            onChange={handleChange}
            placeholder="Ingresa el nombre"
            className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email:{" "}
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="ejemplo@ejemplo.com"
            className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label
          htmlFor="phone"
          className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Telefono:{" "}
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            placeholder="(502) 5555-5555"
            className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label
          htmlFor="website"
          className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Web:{" "}
          <input
            name="website"
            type="url"
            value={website}
            onChange={handleChange}
            placeholder="https://tusitio.com"
            className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
      <button
        type="submit"
        onClick={handleAdd}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all duration-300"
      >
        Guardar Contacto
      </button>
    </form>
  );
};

export default FormAddContact;
