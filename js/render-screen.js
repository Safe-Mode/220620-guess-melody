const mainEl = document.querySelector(`.main`);

export default (screen) => {
  mainEl.innerHTML = ``;
  mainEl.appendChild(screen);
};
