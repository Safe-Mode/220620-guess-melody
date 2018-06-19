export default (element) => {
  const appEl = document.querySelector(`.app`);
  appEl.insertBefore(element, appEl.firstChild);
};
