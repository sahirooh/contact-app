import { useState } from 'react';

const useDisclose = () => {

const [showModal, setShowModal] = useState(false);

const isOpen = () => {
  setShowModal(true);
};

const isClose = () => {
  setShowModal(false);
};

  return {isOpen, isClose, showModal}
}

export default useDisclose