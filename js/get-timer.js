export default (time) => {
  return {
    initTime: time,
    currentTime: time,

    tick() {
      --this.currentTime;
      return (this.currentTime === 0) ? this.notifyOnTimerEnd() : false;
    },

    notifyOnTimerEnd() {
      return `Прошло ${this.initTime} секунд`;
    }
  };
};
