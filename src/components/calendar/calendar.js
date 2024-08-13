import './calendar.css';

function Calendar() {
    
    return (
        <div class="calendar">            
            <h3>Calendar</h3>
            <iframe src='https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FDenver'></iframe>
      </div>
    )
}

export { Calendar };