import React, { useState, useRef, useEffect } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import InfoCard from '../InfoCard/InfoCard';
import AddCardMenu from '../AddCardMenu/AddCardMenu';
import EditModal from '../EditModal/EditModal';
import { usePersonaStore } from '../../store/usePersonaStore';
import { PERSONA_ICONS } from '../../assets/icons/Avatars';
import styles from './PersonaEditor.module.scss';

function PersonaEditor() {
  const { persona } = usePersonaStore();
  const [cardsColumn1, setCardsColumn1] = useState([{ id: Date.now(), type: 'image' }]);
  const [cardsColumn2, setCardsColumn2] = useState([
    {
      id: Date.now() + 1,
      type: 'text',
      initialContent: '<p><strong>Complete your persona</strong><br>You could start by adding some demographic information, needs, frustrations, etc.</p>',
    },
  ]);
  const [showAddMenuColumn, setShowAddMenuColumn] = useState(null);
  const menuRef = useRef(null);

  const handleAddCard = (type, column) => {
    const newCard = { id: Date.now(), type };
    if (column === 1) {
      setCardsColumn1([...cardsColumn1, newCard]);
    } else {
      setCardsColumn2([...cardsColumn2, newCard]);
    }
    setShowAddMenuColumn(null);
  };

  const handleDeleteCard = (id, column) => {
    if (column === 1) {
      setCardsColumn1(cardsColumn1.filter((card) => card.id !== id));
    } else {
      setCardsColumn2(cardsColumn2.filter((card) => card.id !== id));
    }
  };


  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowAddMenuColumn(null);
    }
  };

  useEffect(() => {
    if (showAddMenuColumn !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAddMenuColumn]);

  return (
    <div className="container">
      <header className="d-flex mb-4">
        <div className={styles.avatar} style={{ backgroundColor: persona.color }}>
          {PERSONA_ICONS[persona.avatar].icon}
        </div>
        <h1 className={`${styles.title} ms-4 me-2`}>{persona.name}</h1>
        <EditModal />
      </header>

      <div className={`${styles.cardsContainer} d-flex gap-4`}>
        <div
          className={`${styles.cardsWrapper} d-flex flex-column align-self-start gap-3`}
          onMouseEnter={() => setShowAddMenuColumn(1)}
        >
          {cardsColumn1.map((card) =>
            card.type === 'image' ? (
              <ImageCard key={card.id} />
            ) : (
              <InfoCard key={card.id} onDelete={() => handleDeleteCard(card.id, 1)} />
            )
          )}
          {showAddMenuColumn === 1 && (
            <div ref={menuRef}>
              <AddCardMenu columnPosition={"columnOne"} onAddCard={(type) => handleAddCard(type, 1)} />
            </div>
          )}
        </div>

        <div
          className={`${styles.cardsWrapper} d-flex flex-column align-self-start gap-3`}
          onMouseEnter={() => setShowAddMenuColumn(2)}
        >
          <div className={`${styles.card} d-flex flex-row gap-2`}>
            <div className={styles.avatar} style={{ backgroundColor: persona.color }}>
              {PERSONA_ICONS[persona.avatar].icon}
            </div>
            <div className="align-self-center">
              <h2 className={styles.title}>Persona Name</h2>
              <p className={styles.subtitle}>{persona.name}</p>
            </div>
          </div>

          {cardsColumn2.map((card) =>
            card.type === 'image' ? (
              <ImageCard key={card.id} />
            ) : (
              <InfoCard
                key={card.id}
                initialContent={card.initialContent}
                onDelete={() => handleDeleteCard(card.id, 2)}
              />
            )
          )}
          {showAddMenuColumn === 2 && (
            <div ref={menuRef}>
              <AddCardMenu columnPosition={"columnTwo"} onAddCard={(type) => handleAddCard(type, 2)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonaEditor;
