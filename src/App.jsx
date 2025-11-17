import Footer from "./components/Footer";
import Header from "./components/Header";
import TableContacts from "./components/TableContacts";
import FormAddContact from "./components/FormAddContact";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-16 pb-20">
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default App;
