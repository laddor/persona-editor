# Persona Editor Project

This project is a Persona Editor interface, designed with React, which allows users to customize persona cards with various features such as adding images, text, and choosing colors and icons. The project uses Bootstrap and Tiptap for styling and rich text editing, respectively.

## Features

- **Customizable Persona Cards**: Add image or text cards, edit personas with icons, colors, and names.
- **Interactive Menus**: Dropdown menus for adding and configuring cards.
- **Real-Time Updates**: Changes are updated in real time through the use of states.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Bootstrap**: Used for UI components and styling.
- **Tiptap**: Rich text editor for adding and formatting text content in the persona cards.
- **SCSS Modules**: For styling components.
- **React-Bootstrap**: Integrated Bootstrap components with React.
- **React-Icons**: For adding icons to components.

## Project Structure

- `src/components`: Contains core components such as `PersonaEditor`, `InfoCard`, `AddCardMenu`, and `EditModal`.
- `src/store`: State management for the persona data.
- `src/assets/icons`: SVG icons for personas.
- `src/styles`: Global and modular CSS/SCSS styles for the components.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/persona-editor.git
   cd persona-editor

2. **Install dependencies:**
    ```bash
    npm install

3. **Start the development server:**
    ```bash
    npm run dev
    Access the app in your browser at http://localhost:3000.

3. **Start the development server:**
    ```bash
    npm run build

### Usage
- **Edit Modal**: Click the pencil icon to edit the persona name, icon, and color.
- **Add Cards**: Hover over the column, open the dropdown, and select a card type to add a card.
- **Delete Cards**: Remove any added card by selecting the delete button.