import Contact from "./Contact";

const TableContacts = ({ dispatch, contactsAPI }) => {
  const contact = {
    id: 1,
    name: "",
    email: "",
    phone: "",
    website: "",
    accion:'',
  };

  return (
    <table
      className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg 
      overflow-hidden"
    >
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          {Object.keys(contact).map((key) => (
            <th
              key={key}
              className="py-3 px-4 border-b text-left text-gray-700 dark:text-gray-200 
      font-semibold"
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {contactsAPI.map((contact) => (
          <Contact dispatch={dispatch} key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
};

export default TableContacts;
