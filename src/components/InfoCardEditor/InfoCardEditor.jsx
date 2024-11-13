import React, { useState, useRef, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { Button } from 'react-bootstrap';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import Highlight from '../../extensions/Highlight';
import { FaRegTrashAlt } from "react-icons/fa";
import { BsTypeBold, BsTypeItalic } from "react-icons/bs"
import { MdOutlineFormatListBulleted, MdLink, MdFormatColorText } from "react-icons/md";
import { VscListOrdered } from "react-icons/vsc";
import { BiHighlight } from "react-icons/bi";

import styles from './InfoCardEditor.module.scss';

function InfoCardEditor({ initialContent, onContentChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [showLinkDropdown, setShowLinkDropdown] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color, Highlight, Link],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
  });

  const editorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editorRef.current && !editorRef.current.contains(event.target)) {
        setIsEditing(false);
        editor.commands.blur();
      }
    };

    if (isEditing) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isEditing, editor]);

  const setTextColor = (color) => {
    editor.chain().focus().setColor(color).run();
  };

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run();
      setLinkUrl('');
      setShowLinkDropdown(false);
    }
  };

  return (
    <div
      ref={editorRef}
      className={`${styles.infoCardEditor} ${isEditing ? styles.active : ""}`} onMouseEnter={() => setIsEditing(true)}>
      {isEditing ? (
        <>
          <div className={styles.toolbar}>
            <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? styles.active : ''}>
              <BsTypeBold />
            </button>

            <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? styles.active : ''}>
              <BsTypeItalic />
            </button>

            <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? styles.active : ''}>
              <MdOutlineFormatListBulleted />
            </button>
            <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? styles.active : ''}>
              <VscListOrdered />
            </button>

            <div className={styles.linkDropdownWrapper}>
              <button className={showLinkDropdown ? styles.active : ''} onMouseEnter={() => setShowLinkDropdown(!showLinkDropdown)}>
                <MdLink />
              </button>

              {showLinkDropdown && (
                <div className={styles.linkDropdown}>
                  <label>Add your link</label>

                  <input
                    type="text"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    placeholder="https://example.com"
                  />

                  <Button className={styles.customButtonPrimary} variant="primary" onClick={addLink}>
                    Save
                  </Button>
                </div>
              )}
            </div>

            <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? styles.active : ''}>
              <BiHighlight />
            </button>

            <button onClick={() => setTextColor('red')}>
              <MdFormatColorText />
            </button>

            <button onClick={onDelete} >
              <FaRegTrashAlt />
            </button>
          </div>
          <EditorContent editor={editor} className={styles.textEditor} />
        </>
      ) : (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: initialContent }}
        />
      )}
    </div>
  );
}

export default InfoCardEditor;
