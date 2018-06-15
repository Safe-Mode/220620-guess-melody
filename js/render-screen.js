export default (screen) => {
  const appEl = document.querySelector(`.app`);
  const mainEl = appEl.querySelector(`.main`);

  appEl.replaceChild(screen, mainEl);
};
