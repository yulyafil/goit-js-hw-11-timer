const dataTimer = document.querySelector("#timer-1");

const daysValue = document.querySelector('[data-value="days"]');
const hoursValue = document.querySelector('[data-value="hours"]');
const minsValue = document.querySelector('[data-value="mins"]');
const secsValue = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.init();
  }
  init() {
    setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      const time = this.getTime(deltaTime);

      this.onTick(time);
    });
  }

  getTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timerData = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Nov 05, 2020"),
  onTick: updateTimer,
});

function updateTimer({ days, hours, mins, secs }) {
  daysValue.textContent = `${days}`;
  hoursValue.textContent = `${hours}`;
  minsValue.textContent = `${mins}`;
  secsValue.textContent = `${secs}`;
}
