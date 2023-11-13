import React from "react";
import { Field, Form, Formik } from "formik";
import Modal from "./Modal";

const UpdateDetails = ({ isOpen, isClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} isClose={isClose}>
        <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}>
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
            <button className="bg-orange px-2 border mt-4 self-end">Add Contact</button>
            </div> 
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default UpdateDetails;
