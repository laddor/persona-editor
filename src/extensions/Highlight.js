import { Mark } from '@tiptap/core';

const Highlight = Mark.create({
  name: 'highlight',

  addOptions() {
    return {
      HTMLAttributes: { style: 'background-color: yellow;' },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[style*="background-color: yellow;"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', this.options.HTMLAttributes, 0];
  },

  addCommands() {
    return {
      toggleHighlight: () => ({ commands }) => {
        return commands.toggleMark(this.name);
      },
    };
  },
});

export default Highlight;
