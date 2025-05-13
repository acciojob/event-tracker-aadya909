import React, { useState } from 'react';
import CalendarView from './Calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/App.css';

export default function App() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddEvent = (event) => setEvents([...events, event]);
  const handleUpdateEvent = (updatedEvent) =>
    setEvents(events.map((ev) => (ev.id === updatedEvent.id ? updatedEvent : ev)));
  const handleDeleteEvent = (id) => setEvents(events.filter((ev) => ev.id !== id));

  return (
    <div className="app">
      {/* ✅ Put all four buttons in one container */}
      <div className="button-group">
        <button className="btn" onClick={() => setFilter('all')}>All</button>
        <button className="btn" onClick={() => setFilter('past')}>Past</button>
        <button className="btn" onClick={() => setFilter('upcoming')}>Upcoming</button>
        <button className="btn" onClick={() => setPopupOpen(true)}>+ Add Event</button>
      </div>

      <CalendarView
        events={events}
        filter={filter}
        onAdd={handleAddEvent}
        onEdit={handleUpdateEvent}
        onDelete={handleDeleteEvent}
        isPopupOpen={isPopupOpen}
        setPopupOpen={setPopupOpen}
      />
    </div>
  );
}

