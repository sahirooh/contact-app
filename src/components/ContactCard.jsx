import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const ContactCard = ({ contacts }) => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      {contacts.map((contact) => (
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
            <RiEditCircleLine className="" />
            <MdDelete className="text-purple" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
