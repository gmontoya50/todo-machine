import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function AlertModal({ show, toggleShow }) {
  return (
    <>
      <Modal show={show} onHide={toggleShow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Alerta</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hubo un cambio!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => toggleShow()}>
            Recargar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
