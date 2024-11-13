import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './AddCardMenu.module.scss';

function AddCardMenu({ onAddCard, columnPosition }) {
  return (
    <div className={`${styles.dropdownContainer} ${columnPosition === 'columnOne' ? styles.columnOne : styles.columnTwo}`}>
      <DropdownButton
        className={styles.addCardButton}
        id="add-card-dropdown"
        title="Add Card"
        onSelect={() => {}}
      >
        <Dropdown.Item as="button" onClick={() => onAddCard('text')}>
          Text
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => onAddCard('image')}>
          Image
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default AddCardMenu;
