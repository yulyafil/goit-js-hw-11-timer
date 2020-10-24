// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });
const dataTimer = document.querySelector("#timer-1");
const daysValue = document.querySelector('[data-value="days"]');
const hoursValue = document.querySelector('[data-value="hours"]');
const minsValue = document.querySelector('[data-value="mins"]');
const secsValue = document.querySelector('[data-value="secs"]');

const targetDate = new Date("Nov 05, 2020");

setInterval(() => {
  const currentDate = Date.now();
  const time = targetDate - currentDate;
  const timer = getTime(time);

  undateTimerFace(timer);
}, 1000);

function pad(value) {
  return String(value).padStart(2, "0");
}

function getTime(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
function undateTimerFace({ days, hours, mins, secs }) {
  daysValue.textContent = `${days} дней`;
  hoursValue.textContent = `${hours} часов`;
  minsValue.textContent = `${mins} минут`;
  secsValue.textContent = `${secs} секунд`;
}
//${ hours } часов ${ mins } минут  ${ secs } секунд`
