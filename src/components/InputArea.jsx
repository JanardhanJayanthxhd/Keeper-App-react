import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function InputArea({ setNotes }) {
    const [note, updateNote] = useState({
        title: '',
        content: '',
    });
    const [isActive, setIsActive] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        updateNote((prevNote) => ({
            ...prevNote,
            [name]: value,
        }));
        console.log(note);
    }

    function submitNote(event) {
        event.preventDefault();
        if (!note.title && !note.content) {
            return;
        }

        setNotes((prevNotes) => {
            return [...prevNotes, { id: crypto.randomUUID(), ...note }];
        });
        updateNote({ title: '', content: '' });
    }

    return (
        <div>
            <form className="create-note">
                {isActive && (
                    <input
                        name="title"
                        onChange={(e) => handleChange(e)}
                        value={note.title}
                        placeholder="Title"
                    />
                )}
                <textarea
                    name="content"
                    onChange={(e) => handleChange(e)}
                    onClick={() => setIsActive(true)}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isActive ? '3' : '1'}
                />
                <Zoom in={isActive}>
                    <Fab
                        size="large"
                        color="primary"
                        onClick={(e) => submitNote(e)}
                        aria-label="add"
                    >
                        <AddIcon size="large" />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}
