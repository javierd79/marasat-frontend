import React from 'react';
import './Timeline.css';

interface Event {
  date: string;
  description: string;
}

interface TimelineProps {
  events: Event[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index}>
          <div className="timeline-event">
            <div className="event-date">{event.date}</div>
            <div className="event-description">{event.description}</div>
          </div>
          {index !== events.length - 1 && <div className="timeline-divider" />}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
