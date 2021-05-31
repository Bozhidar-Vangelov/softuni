function attachEventsListeners() {
  const daysBtn = document.querySelector("#daysBtn");
  const hoursBtn = document.querySelector("#hoursBtn");
  const minutesBtn = document.querySelector("#minutesBtn");
  const secondsBtn = document.querySelector("#secondsBtn");

  const daysInput = document.querySelector("#days");
  const hoursInput = document.querySelector("#hours");
  const minutesInput = document.querySelector("#minutes");
  const secondsInput = document.querySelector("#seconds");

  daysBtn.addEventListener("click", () => {
    convert(daysInput.value * 86400);
  });
  hoursBtn.addEventListener("click", () => {
    convert(hoursInput.value * 3600);
  });
  minutesBtn.addEventListener("click", () => {
    convert(minutesInput.value * 60);
  });
  secondsBtn.addEventListener("click", () => {
    convert(seconds.value);
  });

  function convert(secs) {
    const days = secs / (24 * 60 * 60);
    const hours = secs / (60 * 60);
    const mins = secs / 60;

    daysInput.value = Number(days);
    hoursInput.value = Number(hours);
    minutesInput.value = Number(mins);
    secondsInput.value = Number(secs);
  }
}
