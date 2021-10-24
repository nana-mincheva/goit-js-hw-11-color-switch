const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

refs.btnStop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorsSwitch = {
  intervalId: null,

  start() {

    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    this.intervalId = setInterval(() => {
      const currentIndex = randomIntegerFromInterval(0, colors.length - 1);

      colors.map((el, ind) => {
        if (currentIndex === ind) {
          document.body.style.backgroundColor = el;
        }
      });
    }, 1000);
  },

  stop() {


    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
  },
};

refs.btnStart.addEventListener('click', colorsSwitch.start.bind(colorsSwitch));
refs.btnStop.addEventListener('click', colorsSwitch.stop.bind(colorsSwitch));