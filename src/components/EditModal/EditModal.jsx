import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaPencilAlt } from 'react-icons/fa';
import { usePersonaStore } from '../../store/usePersonaStore';
import { PERSONA_ICONS } from '../../assets/icons/Avatars';

import styles from './EditModal.module.scss';

function EditModal() {
  const { persona, updatePersona } = usePersonaStore();
  const [show, setShow] = useState(false);

  const [name, setName] = useState(persona.name);

  const [color, setColor] = useState(persona.color);
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedAvatar, setSelectedAvatar] = useState(persona.avatar || 0); // Assuming persona has an `avatar` property

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    updatePersona({ name, color, avatar: selectedAvatar });
    handleClose();
  };

  const colorOptions = [
    "#222ADD",
    "#148EFF",
    "#004136",
    "#0BC66D",
    "#EAFE99",
    "#FFDB5A",
    "#FFA914",
    "#FF8A7A",
    "#FF4F44",
    "#CD2A14",
    "#A529D0",
    "#00256E",
    "#99FEEC"
  ];

  return (
    <>
      <Button variant="trasnparent" onClick={handleShow}>
        <FaPencilAlt />
      </Button>

      <Modal show={show} onHide={handleClose} centered className={styles.editModal}>
        <Modal.Header className={styles.customModalHeader} closeButton>
          <Modal.Title>Quick Edit</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formPersonaName">
              <div className='d-flex mb-3'>
                <div className={styles.avatar} style={{ backgroundColor: selectedColor }}>
                  { PERSONA_ICONS[selectedAvatar].icon }
                </div>

                <div className={`${styles.inputNameWrapper} align-self-end`}>
                  <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                </div>
              </div>
            </Form.Group>
          </Form>


          <label className='mb-3'>Image</label>
          <div className="d-flex gap-2 flex-wrap mb-3">
            {PERSONA_ICONS.map((iconObject, index) => (
              <div
                key={index}
                className={`${styles.avatarOption} ${selectedAvatar === index ? styles.selectedAvatar : ''}`}
                onClick={() => setSelectedAvatar(index)}
              >
                {iconObject.icon}
              </div>
            ))}
          </div>

          <label className='mb-3'>Color</label>
          <div className="d-flex gap-2 flex-wrap">
            {colorOptions.map((color, index) => (
              <div
                key={index}
                className={`${styles.colorOption} ${selectedColor === color ? styles.active : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => {
                  setColor(color);
                  setSelectedColor(color);
                }}
              >
                {color}
              </div>
            ))}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className={styles.customButtonTransparent} variant='transparent' onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.customButtonPrimary} variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
