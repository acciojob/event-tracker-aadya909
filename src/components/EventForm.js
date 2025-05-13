import React, { useState, useEffect } from 'react';

export default function EventForm({ date, event, onSave, onDelete }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setLocation(event.location);
    } else {
      setTitle('');
      setLocation('');
    }
  }, [event]);

  const handleSubmit = () => {
    const newEvent = {
      id: event ? event.id : Date.now(),
      title,
      location,
      start: date || event.start,
      end: date || event.end,
    };
    onSave(newEvent);
  };

  return (
    <div className="popup-content">
      <input placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Event Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <div className="mm-popup__box__footer__right-space">
        <button className="mm-popup__btn" onClick={handleSubmit}>Save</button>
        {event && (
          <>
            <button className="mm-popup__btn--info" onClick={handleSubmit}>Edit</button>
            <button className="mm-popup__btn--danger" onClick={onDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}
