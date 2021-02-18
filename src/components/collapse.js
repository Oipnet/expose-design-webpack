const collapse = (selector = '.is-collapse') => {
  const elements = [...document.querySelectorAll(selector)];

  elements.map((element) => {
    const target = element.querySelector(element.dataset.target);
    const activator = element.querySelector(element.dataset.activator);
    const arrow = element.querySelector(element.dataset.arrow);

    activator.addEventListener('click', (e) => {
      e.preventDefault();

      target.classList.toggle('is-hidden');
      arrow.classList.toggle('reverse');
    });
  });
};

export default {};
export { collapse };
