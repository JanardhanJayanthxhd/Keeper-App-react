import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import InputArea from './components/InputArea';
import { useState } from 'react';

function App() {
    const [notes, setNotes] = useState([]);

    function deleteNote(id) {
        console.log(id);
        setNotes((prevNotes) => {
            return prevNotes.filter((value, idx) => {
                return value.id !== id;
            });
        });
    }

    return (
        <>
            <Header />
            <InputArea setNotes={setNotes} />
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    handleDelete={deleteNote}
                />
            ))}
            <Footer />
        </>
    );
}

export default App;
