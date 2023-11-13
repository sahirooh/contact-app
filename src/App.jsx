import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import UpdateDetails from "./components/UpdateDetails";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const isOpen = () => {
    setShowModal(true);
  }

  const isClose = () => {
    setShowModal(false);
  }

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
      <Searchbox isOpen={isOpen} />
      <ContactCard contacts={contacts} />
      <UpdateDetails isOpen={showModal} isClose={isClose} />
    </div>
  );
};

export default App;
