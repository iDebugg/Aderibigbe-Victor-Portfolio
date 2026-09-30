export default function Booking() {
  return <div className="booking" id="booking">
    <div className="booking-intro">
      <img className="avatar" src="/assets/victor-aderibigbe.jpg" alt="Aderibigbe Victor Ademola" />
      <p className="muted">Aderibigbe Victor</p><h2>Website Discussion</h2>
      <p>A 30-minute discussion to understand your product, frontend needs, and how I can help.</p>
      <ul><li><span>◷</span>30m</li><li><span>▣</span>Video call</li><li><span>◎</span><strong id="visitor-timezone">Your local timezone</strong></li></ul>
    </div>
    <p className="booking-fallback">To arrange a call, <a href="mailto:aderibigbevictor79@gmail.com">email Victor</a>.</p>
    <div className="calendar">
      <div className="calendar-head"><h3 aria-live="polite" /><div><button className="month-prev" aria-label="Previous month">‹</button><button className="month-next" aria-label="Next month">›</button></div></div>
      <div className="weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
      <div className="days" /><p className="timezone-note">Times shown in <span id="calendar-timezone">your local timezone</span>.</p>
    </div>
    <aside className="booking-times">
      <div className="times-head"><h3 className="selected-date">Select a date</h3><div className="clock-mode" aria-label="Time format"><button className="active" type="button" aria-pressed="true">12h</button><button type="button" aria-pressed="false">24h</button></div></div>
      <div className="times" aria-live="polite"><p>Choose an available date to see times.</p></div>
      <button className="continue" disabled>Choose a date and time</button>
    </aside>
  </div>;
}
