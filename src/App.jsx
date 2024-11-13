import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import PersonaEditor from './components/PersonaEditor/PersonaEditor';

function App() {
  return (
      <main className="content">
        <div className="container d-flex">
          <aside>
            <Sidebar />
          </aside>

            <PersonaEditor />
        </div>
      </main>
  );
}

export default App;