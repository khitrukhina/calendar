import { useState, useContext } from 'react';
import { NotesContext } from '../tools/notesProvider';

export const DayPage = (props) => {
    const date = new Date(props.year, props.month - 1, props.day);
    const notes = useContext(NotesContext);
    const note = notes[date.toISOString().substring(0,10)];

    const [memo, setMemo] = useState(note);

    const dateLabel = date.toLocaleDateString();

    const handleChangeMemo = ( {target:{value}} ) => {
        setMemo(value);
    }

    const handleSaveClick = () => {
        console.log('save');
    }


    return (
        <div>
            <div>{dateLabel}</div>
            <textarea style={{border: '2px dashed #7DA1DC', resize: 'none'}} onChange={handleChangeMemo} cols="82" rows="10" value={memo}></textarea>
            <div>
                <button className='btn-year' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
        
    )
}