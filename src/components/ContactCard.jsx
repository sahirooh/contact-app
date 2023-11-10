import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";

const ContactCard = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => {
        <div key={contact.id}>
            <HiOutlineUserCircle />
        </div>;
      })}
    </div>
  );
};

export default ContactCard;
