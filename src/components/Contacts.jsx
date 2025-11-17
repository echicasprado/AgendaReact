import { useEffect, useReducer, useState } from "react";
import { ContactsReduce } from "../reduce/ContactsReduce";
import FormAddContact from "./FormAddContact";
import TableContacts from "./TableContacts";

const init = () => {
  const contactos = localStorage.getItem("contacts");
  return contactos ? JSON.parse(contactos) : null;
};

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReduce, [], init);
  const [formView, setFormView] = useState(false);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Agenda de Contactos
      </h1>

      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <button
            onClick={() => setFormView(!formView)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 mb-6"
          >
            {formView ? "Ocultar Formulario" : "Agregar Nuevo Contacto"}
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              formView ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {formView && <FormAddContact dispatch={dispatch} />}
          </div>
        </div>
        <div className="md:w-2/3">
          <TableContacts dispatch={dispatch} contactsAPI={state} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
