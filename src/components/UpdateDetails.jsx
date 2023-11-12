import React from "react";
import Modal from "./Modal";
import { Form, Formik } from "formik";

const UpdateDetails = ({ isOpen, isClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} isClose={isClose}>
        <Formik>
          <Form>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="border" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="border" />
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
