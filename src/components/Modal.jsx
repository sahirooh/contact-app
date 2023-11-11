import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, isClose }) => {
  return (
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
            <div className="flex flex-col gap-4">
              <label htmlFor="name">
                Name <input type="text" className="border px-2" />
              </label>

              <label htmlFor="email">
                Email <input type="text" className="border px-2" />
              </label>
              <textarea className="border" name="text" id="text"></textarea>
            </div>
          </div>

          <div
            onClick={isClose}
            className="backdrop-blur h-screen w-screen z-40 absolute top-0"
          />
        </>
      )}
    </>
  );
};

export default Modal;
