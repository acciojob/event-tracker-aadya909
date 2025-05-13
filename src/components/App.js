import React, { useState } from 'react';
import CalendarView from './Calendar';
import FilterButtons from './FilterButtons';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/App.css';

export default function App() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddEvent = (event) => setEvents([...events, event]);
  const handleUpdateEvent = (updatedEvent) => {
    setEvents(events.map(ev => ev.id === updatedEvent.id ? updatedEvent : ev));
  };
  const handleDeleteEvent = (id) => {
    setEvents(events.filter(ev => ev.id !== id));
  };

  return (
    <div className="app">
      <FilterButtons setFilter={setFilter} />
      <CalendarView
        events={events}
        filter={filter}
        onAdd={handleAddEvent}
        onEdit={handleUpdateEvent}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
}

