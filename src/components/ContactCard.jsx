import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import UpdateDetails from "./UpdateDetails";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";

const ContactCard = ({ contacts }) => {

  const { isOpen, showModal, isClose } = useDisclose();

  const deleteContact = async (id) => {

    try {
      
      await deleteDoc(doc(db, "contacts", id))
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mt-4 flex flex-col gap-3">
      {contacts.map((contact) => (
        <>
          <div
            className="flex bg-yellow rounded-md p-2 items-center justify-between"
            key={contact.id}
          >
            <div className="flex items-center gap-2">
              <HiOutlineUserCircle className="text-orange text-4xl" />
              <div className="">
                <h1 className="font-medium">{contact.name}</h1>
                <p className="text-[14px]">{contact.email}</p>
              </div>
            </div>
            <div className="flex  text-3xl gap-1">
              <RiEditCircleLine onClick={isOpen} className="cursor-pointer" />
              <MdDelete
                onClick={() => deleteContact(contact.id)}
                className="text-purple cursor-pointer"
              />
            </div>
          </div>
          <UpdateDetails contactss={contacts} isUpdate showModal={showModal} isClose={isClose} />
        </>
      ))}
    </div>
  );
};

export default ContactCard;
