import React, { useState } from 'react';
import InfoCardEditor from '../InfoCardEditor/InfoCardEditor';
import styles from './InfoCard.module.scss';

function InfoCard({ initialContent, onDelete }) {
  const [content, setContent] = useState(initialContent || '<p>Click to edit content...</p>');

  const handleContentChange = (updatedContent) => {
    setContent(updatedContent);
  };

  return (
    <div className={styles.infoCard}>
      <InfoCardEditor
        initialContent={content}
        onContentChange={handleContentChange}
        onDelete={onDelete}
      />
    </div>
  );
}

export default InfoCard;
