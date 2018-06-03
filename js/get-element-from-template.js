const element = document.createElement(`div`);

export default (template) => {
  element.innerHTML = template;
  return element.firstElementChild;
};
