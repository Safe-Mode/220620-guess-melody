export default (template) => {
  const element = document.createElement(`div`);
  const fragment = document.createDocumentFragment();

  element.innerHTML = template;

  for (let i = 0; i < element.children.length; i++) {
    fragment.appendChild(element.children[i].cloneNode(true));
  }

  return fragment;
};
