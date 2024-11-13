import React from 'react';
import { useImageUpload } from '../../hooks/useImageUpload';
import styles from './ImageCard.module.scss';

function ImageCard() {
  const { image, handleImageChange } = useImageUpload();

  return (
    <div className={styles.cardImage}>
      <input type="file" onChange={handleImageChange} className={styles.fileInput} />
        {!image ? (
        <div className={styles.placeholder}>
          <div className={styles.icon} />

          <p className={styles.text}>Choose an image</p>
        </div>
      ) : (
        <img src={image} alt="Persona" className={styles.image} />
      )}
    </div>
  );
}

export default ImageCard;
