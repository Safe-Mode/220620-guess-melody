export default (element) => {
  const appEl = document.querySelector(`.app`);
  appEl.innerHTML = ``;
  appEl.insertBefore(element, appEl.firstChild);
};
