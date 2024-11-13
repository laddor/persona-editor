import React from 'react';
import styles from './Sidebar.module.scss';
import { ListGroup } from 'react-bootstrap';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ListGroup>
        <ListGroup.Item>Favorites</ListGroup.Item>
        <ListGroup.Item>Shared with me</ListGroup.Item>
        <ListGroup.Item>My Workspace</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Sidebar;
