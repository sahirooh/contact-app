import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts"); 
        const data = await getDocs(contactsRef);
        const contactlist = data.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          }
        })
        setContacts(contactlist);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="max-w-[360px] mx-auto">
      <Navbar />
      <Searchbox />
      <ContactCard contacts={contacts} />
      <Modal />
    </div>
  );
};

export default App;
