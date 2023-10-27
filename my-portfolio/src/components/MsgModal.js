import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MsgModal({show, onHide}) {
    const handleClose = () => {
        onHide(); // Close the modal
        window.location.reload(); // Refresh the page
      };
    

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Thank you!</Modal.Title>
    </Modal.Header>
    <Modal.Body>Message was successfully sent, I will get back to you shortly!</Modal.Body>
  </Modal>
  );
}

export default MsgModal;

// show={show} onHide={handleClose}
// show={show} onHide={handleClose}