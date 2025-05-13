import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import EventForm from './EventForm';
import Popup from 'reactjs-popup';
import { getFilteredEvents } from './utils';

const localizer = momentLocalizer(moment);

export default function CalendarView({ events, filter, onAdd, onEdit, onDelete }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo.start);
    setSelectedEvent(null);
    setPopupOpen(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setPopupOpen(true);
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={getFilteredEvents(events, filter)}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 600 }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: moment(event.start).isBefore(moment())
              ? 'rgb(222, 105, 135)' // past
              : 'rgb(140, 189, 76)', // upcoming
          },
        })}
      />
      <Popup open={popupOpen} closeOnDocumentClick onClose={() => setPopupOpen(false)}>
        <EventForm
          date={selectedSlot}
          event={selectedEvent}
          onSave={(ev) => {
            selectedEvent ? onEdit(ev) : onAdd(ev);
            setPopupOpen(false);
          }}
          onDelete={() => {
            if (selectedEvent) onDelete(selectedEvent.id);
            setPopupOpen(false);
          }}
        />
      </Popup>
    </>
  );
}
