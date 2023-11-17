import React from "react";
import { Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

const UpdateDetails = ({ isUpdate, showModal, isClose, contactss }) => {

  const addContact = async (contact) => {

    try {

      const contactRef = collection(db, "contacts");

      await addDoc(contactRef, contact);

      isClose();

      toast.success("Contact Added Successfully")
      
    } catch (error) {
      
      console.log(error)
    }
  }

  const updateContact = async (contact, id) => {

    try {

      const contactRef = doc(db, "contacts", id);

      await updateDoc(contactRef, contact);

      isClose();

      toast.success("Contact Updated Successfully");
      
    } catch (error) {
      
      console.log(error)
    }
  }

  return (
    <div>
      <Modal showModal={showModal} isClose={isClose}>
        <Formik
          initialValues={
            isUpdate
              ? {
                  name: contactss.name,
                  email: contactss.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contactss.id) :
            addContact(values);
          }}
        >
          <Form>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <Field name="name" className="border px-2 py-1 text-[14px]" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <Field name="email" className="border px-2 py-1 text-[14px]" />
              </div>
              <button className="bg-orange px-2 border mt-4 self-end">
                {isUpdate ? "Update" : "Add"} Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default UpdateDetails;
