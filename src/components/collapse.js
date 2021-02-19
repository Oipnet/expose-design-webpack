const collapse = (selector = '.is-collapse') => {
  const elements = [...document.querySelectorAll(selector)];

  elements.map((element) => {
    const target = element.querySelector(element.dataset.target);
    const arrow = element.querySelector(element.dataset.arrow);
    const arrowRotation = element.dataset.arrowRotation ? element.dataset.arrowRotation : 'right';

    let activatorClasses = element.dataset.activator.split(',');
    let activators = [];
    activatorClasses.forEach(activatorClass => {
      activators.push(element.querySelector('.' + activatorClass));
    });

    activators.forEach(activator => {
      activator.addEventListener('click', (e) => {
        e.preventDefault();

        target.classList.toggle('is-hidden');
        arrow.classList.toggle('rotate-' + arrowRotation);
      });
    });
  });
};

export default {};
export { collapse };
