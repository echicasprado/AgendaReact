const Contact = ({ contact, dispatch }) => {
  const { id, name, email, phone, website } = contact;

  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };
    dispatch(deleteAction);
  };

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-200 dark:border-gray-700 align-middle">
      <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-900 font-medium">
        {id}
      </td>
      <td className="py-3 px-4 text-base text-gray-900 dark:text-gray-900 font-semibold">
        {name}
      </td>
      <td className="py-3 px-4 text-gray-700 dark:text-gray-900">{email}</td>
      <td className="py-3 px-4 text-gray-700 dark:text-gray-900">{phone}</td>
      <td className="py-3 px-4 text-blue-500 dark:text-blue-400 hover:underline italic">
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </td>
      <td className="py-3 px-4 text-center">
        <button
          onClick={() => handleDelete(id)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full transition-transform transform hover:scale-105"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Contact;
