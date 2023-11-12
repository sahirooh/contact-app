import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, isClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="bg-white z-50 m-auto relative max-w-[80%] min-h-[200px] p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={isClose}
                className="cursor-pointer text-xl"
              />
            </div>
            
            {children}
          </div>

          <div
            onClick={isClose}
            className="backdrop-blur h-screen w-screen z-40 absolute top-0"
          />
        </>
      )}
    </>
  ,document.getElementById("portal"));
};

export default Modal;
