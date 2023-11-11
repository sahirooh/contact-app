import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

const Searchbox = ({ isOpen }) => {
  return (
    <div className="flex relative gap-2 items-center">
      <AiOutlineSearch className="absolute text-white text-3xl pl-2" />
      <input
        className="bg-transparent border rounded-lg flex-grow text-white outline-none h-10 pl-8 py-[7px]"
        type="text"
        placeholder="Search Contacts"
      />
      <AiFillPlusCircle
        onClick={isOpen}
        className="text-5xl text-white cursor-pointer"
      />
    </div>
  );
};

export default Searchbox;
