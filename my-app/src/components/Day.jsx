import { StyledLink } from './Month';
import { NotesContext } from '../tools/notesProvider';
import { useContext } from 'react';

export const Day = ({ year, month, day }) => {
    const notes = useContext(NotesContext);
    const today = new Date();
    const isToday = today.getFullYear() === Number(year) && today.getMonth() === Number(month - 1) && today.getDate() === Number(day);

    let note = '';
    try {
        const date = new Date(year, month - 1, day).toISOString().substring(0, 10);
        note = notes[date]
    } catch {

    }
    return (
        <div style={ {backgroundColor: isToday ? '#7DA1DC' : 'transparent',
        border: note ? '2px solid #7DA1DC' : 'none'
        } }>
            {
                Number.isInteger(Number(day)) ? 
                <StyledLink to={`/year/${year}/month/${month}/day/${day}`}>{day}</StyledLink> :
                <div>{day}</div>
            }
        </div>
    );
}