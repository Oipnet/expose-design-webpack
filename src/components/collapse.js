const collapse = (selector = '.is-collapse') => {
  const elements = [...document.querySelectorAll(selector)];
  console.log(elements);

  elements.map((element) => {
    const target = element.querySelector(element.dataset.target);
    const activator = element.querySelector(element.dataset.activator);
    const arrow = element.querySelector(element.dataset.arrow);

    activator.addEventListener('click', (e) => {
      e.preventDefault();

      target.classList.toggle('is-hidden');
      console.log(target);
      console.log(arrow);
      arrow.classList.toggle('reverse');
    });
  });
};

export default {};
export { collapse };
