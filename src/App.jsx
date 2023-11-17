import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import UpdateDetails from "./components/UpdateDetails";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const { isOpen, showModal, isClose } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactlist = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setContacts(contactlist);
          return contactlist;
        });
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
      <UpdateDetails showModal={showModal} isClose={isClose} />
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default App;
