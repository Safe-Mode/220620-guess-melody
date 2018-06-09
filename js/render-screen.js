const appEl = document.querySelector(`.app`);

export default (screen) => {
  const mainEl = appEl.querySelector(`.main`);
  appEl.replaceChild(screen, mainEl);
};
